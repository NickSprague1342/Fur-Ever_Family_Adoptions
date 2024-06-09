// 21-MERN 14-Stu_useQuery 15-Ins_Query-Variables and 16-Stu_Query-Variables
// https://www.apollographql.com/docs/apollo-server/data/resolvers/

//This code imports the functionalities of AuthenticationError, Users, and Animals from different modules for use in handling authentication and accessing data models within the application
const { AuthenticationError } = require('@apollo/server') 
const { Users, Animals, } = require ('../models')

const resolvers = {
    Query: {
        // This code checks if there's a user authenticated in the context. If there is, it uses findOne to find the user in the database by their ID and populates their animals. If not, it throws an AuthenticationError.
        me: async (parent, context) => {
            if (context.users) {
                return Users.findOne({ _id: context.users._id }).populate('animals');
            }
            throw new AuthenticationError('You must be logged in');
        },
        // This code checks if there's a user authenticated in the context. If yes, it finds an animal in the database by the provided ID and populates its users field. If not, it throws an AuthenticationError.
        getAnimals: async (parent, { id }, context) => {
            if (context.users) {
                return Animals.findOne({ _id: id }).populate('users');
            } throw AuthenticationError('You must be logged in');
        },
        // This code fetches animals using fetchAnimals(), logs the retrieved animals to the console, and returns the pets property from the retrieved animals.
        getPets:  async (parent, context) => {
            const retrievedAnimals = await fetchAnimlas();

            console.log(retrievedAnimlas);

            return retrievedAnimals.pets;
        }
    },

    Mutation: {
        // This code creates a new user record in the database using the provided data. It then generates a token for the user using signToken and returns an object containing the token and the newly created user.
        addUser: async (parent, { username, email, password }) => {
            const users = await Users.create({ username, email, password });
            const token = signToken(users);
            return { token, users };
        },
        // This code tries to find a user in the database by the provided email address. If no user is found, it throws an AuthenticationError. If a user is found, it checks if the provided password matches the user's stored password using isCorrectPassword. If the password is incorrect, it also throws an AuthenticationError. If both checks pass, it generates a token for the user and returns an object containing the token and the user.
        login: async (parent, { email, password }) => {
            const users = await Users.findOne({ email });

            if (!users) {
                throw AuthenticationError;
            }

            const correctPassword = await users.isCorrectPassword(password);

            if (!correctPassword) {
                throw AuthenticationError;
            }

            const token = signToken(users);

            return { token, users };
        },
    },
};

module.exports = resolvers;