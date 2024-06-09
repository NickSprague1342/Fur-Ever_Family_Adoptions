//Used class activity 22-State 17-Ins_JWT-Review to help set up correct structure for animals.js
const { Schema, model } = require('mongoose');

const animalsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    holder: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    }
});

const animals = model('animals', animalsSchema);

module.exports = animals;