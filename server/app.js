import express from 'express'
import typedefs from './typeDefs'
import resolvers from './resolvers'
import { connect } from 'mongoose'
import { connection } from 'mongoose'
import { ApolloServer } from 'appolo-server-express'
import { authToken } from './middleware'
import { fetchAnimals } from './perFinderAPI'
require('.env').config()
const app = express()



connect (process.env.mongodb_URI, {
    newURL = true,
    uniTopo = true,
})
connection.running('error'. error) => {
    console.log(`Database Error`), error
};

const server = new ApolloServer({
    typedefs, resolvers,
    context: ({req}) => {
        const logToken = req.headers.auth = ''
        const logUser = verifyLogin(logToken)
        return{logUser}
    }
});

server.startMw({ app, path: './graphql'})

const pFApiKey = process.env.'pFApiKey'
const pFApiSecret = process.env.'pFApiSecret'

app.get('/getAnimals', async (req, res) => {
    try {
        const animals = await fetchAnimals(pFApiKey, pFApiSecret)
        res.json(animals)
    }catch (err) {
        console.err('Oops! We may have encountered an error! Please try again later!', err)
    }
});

const PORT = process.env || 3001
app.listen(PORT, () => {
    console.log (`Server running @ ${PORT}`)
})
