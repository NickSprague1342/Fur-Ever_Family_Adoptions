const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const { apServer } = require ('@apollo/server')
const { authMw } = require ('server/utils/auth.js')
const {typedefs, resolvers} = require('/Users/nicholassprague/bootcamp/PROJECTS/Project_3/server/schemas')
const apServer = new ApolloServer({
    typedefs,
    resolvers
});

const apolloStart = async () => {
    await server.start();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
    }));
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'server/models/index.js'));
        });
    }
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};

apolloStart();