//Used class activity 22-State 18-Stu_JWT-Review to help set up correct structure for users.js.
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const usersSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    animals: [
        {
            type: Schema.Types.ObjectId,
            ref: 'animals',
        },
    ],
},
    {
        //The following link tells about virtuals available in mongoose.
        //https://mongoosejs.com/docs/tutorials/virtuals.html
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

//This code is a pre-save hook in a Mongoose schema. In this hook, the code is checking whether the document is new or if the password field has been modified. If either of these conditions is true, it uses the bcrypt library to hash the password before saving it to the database. Hashing the password ensures that it's not stored in plain text, enhancing security.
usersSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

//This code defines a method isCorrectPassword for documents of the usersSchema schema. This method is used to compare a plaintext password provided by a user with the hashed password stored in the database. Essentially, this method allows you to check whether a given plaintext password matches the hashed password stored in a document. 
usersSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

//Again referenced the following link from above to help with the get ans set using mongoose.
//https://mongoosejs.com/docs/tutorials/virtuals.html
//Create a virtual property `fullName` with a getter and setter.
usersSchema.virtual('fullName').
    get(function () { return `${this.firstName} ${this.lastName}`; }).
    set(function (v) {
        // `v` is the value being set, so use the value to set
        // `firstName` and `lastName`.
        const firstName = v.substring(0, v.indexOf(' '));
        const lastName = v.substring(v.indexOf(' ') + 1);
        this.set({ firstName, lastName });
    });

    //This code defines a method called generateAuthToken for documents of the usersSchema schema. This method generates an authentication token (JWT) for the user.
usersSchema.methods.generateAuthToken = function () {
    const token = sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

const users = model('users', usersSchema);

module.exports = users;