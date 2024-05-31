const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const ( typedefs, resolvers ) = require('/Users/nicholassprague/bootcamp/PROJECTS/Project_3/server/schemas')
const apServer = new ApolloServer({
    typedefs,
    resolvers
});

const apolloStart = async() => {

}