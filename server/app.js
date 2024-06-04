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



connect (process.env.mongodb_uri, {
    newURL = true,
    uniTopo = true,
})
connection.running('error'. error) => {
    console.log(`Database Error`), error
}