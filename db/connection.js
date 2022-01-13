require('dotenv').config();
const mongoose = require('mongoose');

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env


const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@learningmongodb.duuyu.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;


export default connect = () => {
  mongoose.connect(uri, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})
}