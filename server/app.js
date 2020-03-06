const express = require('express');
const graphqHTTP = require('express-graphql');
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();
const keys = require('./config/keys')

mongoose.connect(
  keys.MongoURI
);

mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})

app.use('/graphql', graphqHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, ()=>{
    console.log("Lisiting to port no : 5000");
})