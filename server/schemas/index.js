// This code exports typedefs and resolvers. By exporting these together, it allows them to be easily imported into tother files where they can be used to set up a GraphQL server.
module.exports = {
    typeDefs: require("./typeDefs"),
    resolvers: require("./resolvers"),
}