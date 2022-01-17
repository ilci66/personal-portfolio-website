const { Schema, model, connect } = require('mongoose');

const formSchema = new Schema({
  name: String,
  email: String,
  message: String 
}, {timestamps: true})

module.exports = model('Form', formSchema); 