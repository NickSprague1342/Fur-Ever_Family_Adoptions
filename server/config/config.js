module.exports = {
    db: {
        url: process.env.MONGODB_URI || 'mongodb://localhost:3001/fur-ever-family-adoptions'
    },

    auth: {
        fFAAPIRSecret: process.env.fFA_SECRET || 'API_SECRET',
    },

    server: {
        PORT: process.env.PORT || 3001,
    },

    rescueGroups: {
        APIKey: process.env.API_KEY || 'API_KEY',
        APISecret: process.env.API_SECRET || 'API_SECRET'
    },
}