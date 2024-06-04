const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const database = require ('.config/connections')
const { ApolloServer } = require ('@apollo/server')
const { authMw } = require ('.auth.js')
const { expMw } = require('@apollo/server')
const {typedefs, resolvers} = require('./schemas')
const app = express()
const apServer = new ApolloServer({
    typedefs,resolvers
});

const apolloStart = async () => {
    await apServer.start();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/graphql', expMw(server, {
        context: authMw
    }));
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'server/models/index.js'));
        });
    }
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`GraphQL @ http://localhost:${PORT}/graphql`);
        });
    });
};

apolloStart();