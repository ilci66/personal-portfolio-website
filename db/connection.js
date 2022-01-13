require('dotenv').config();
const mongoose = require('mongoose');

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@learningmongodb.duuyu.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

const mongooseOptions = {useNewUrlParser: true, useUnifiedTopology: true}

module.export = mongoose.connect(uri, mongooseOptions, () => console.log("connection established"))