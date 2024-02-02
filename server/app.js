const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config({
    path: './.env'
})

// allow cross-origin requests
app.use(cors());

const password = process.env.PASSWORD;
mongoose.connect(`mongodb+srv://shashwat:${password}@cluster0.8e6yml0.mongodb.net/NinjaGraphQL`)
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
