// 21-MERN 13-Ins_useQuery
// https://dev.to/shubhamtiwari909/graphql-typedefs-4bdf
//These typedefs describe the structure of the data that can be queried or manipulated using the GraphQL API.
const typeDefs = `
type Users {
    _id : ID!
    firstName: String!
    lastName: String!
    email: String!
}

type Animals {
    name: String!
    category: String!
    age: Int!
    holder: Users!
}

type Pet {
    name: String
    age: Int
    sex: String
}

type Auth {
    token: ID!
    users: Users
}

type Query {
    # Retrieve a list of all animals
    getAnimals: [Animals]!
    
    # Retrieve a specific animal by ID
    getAnimalsById(id: ID!): Animals

    # Retrieve the currently authenticated user (if any)
    me: Users

    # Get all animals from API
    getAllAnimals: [Animals]
}

type Mutation {
    # Create a new pet
    addPet(name: String!, species: String!, age: Int!): Pet

    # Update an existing pet by ID
    updatePet(id: ID!, name: String, species: String, age: Int): Pet

    # Delete a pet by ID
    deletePet(id: ID!): Pet

    # Register a new user
    addUser(first: String!,last:String!, email: String!, password: String!): Auth

    # Log in an existing user
    login(email: String!, password: String!): Auth
}
`;

// type Query {
// users: [Users!]!
// users(id: ID!): Users!
// usersByName(name: String!): Users!
// }

// type Mutation {
//     addAnimals(name: String!, category: String!, age: Int!, holder: String!) :Aniamls
    
//     updateAnimals(name: String!, category: String!, age: Int!, holder: String!) :Aniamls
    
//     deleteAnimals(name: String!, category: String!, age: Int!, holder: String!) :Aniamls
    
//     addUsers(id: ID!, firstName: String!, lastName: String!, email: String!) : Users
    
//     loginUsers((id: ID!, firstName: String!, lastName: String!, email: String!) : Users
// }`;

module.exports = typeDefs;