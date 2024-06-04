// 21-MERN 13-Ins_useQuery
// https://dev.to/shubhamtiwari909/graphql-typedefs-4bdf
//These typedefs describe the structure of the data that can be queried or manipulated using the GraphQL API.
const typeDefs = `
type Users {
    _id : ID
    firstName: String
    lastName: Sting
    emal: String
}

type Animals {
    name: String
    category: String
    age: Int
    holder: User
}

type Pets {
    name: String
    age: Int
    sex: String
}

type Auth {
    token: ID
    users: Users
}

type Query {
users: [Users!]!
users(id: ID!): Users!
usersByName(name: String!): Users!
}

type Mutation {
    addAnimals(name: String!, category: String!, age: Int!, holder: String!) :Aniamls
    
    updateAnimals(name: String!, category: String!, age: Int!, holder: String!) :Aniamls
    
    deleteAnimals(name: String!, category: String!, age: Int!, holder: String!) :Aniamls
    
    addUsers(id: ID!, firstName: String!, lastName: String!, email: String!) : Users
    
    loginUsers((id: ID!, firstName: String!, lastName: String!, email: String!) : Users
}`;

module.exports = typeDefs;