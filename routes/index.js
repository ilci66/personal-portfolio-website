const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();
const mongoose = require('mongoose');
const {connection} = require('../db/connection.js');
const Form = require('../db/form_model.js')

router.post('/', async (req, res, next) => {
  const { fname:name, femail:email, fmessage:message } = req.body
  await connection;
  console.log('ok it works ==>')

  // console.log(mongoose.connection.readyState);

  console.log(name,email,message)
  let newForm = new Form({ name, email, message }) 
  await newForm.save((err, data) => {
    if(err) console.log(err)
    else if(data) res.json(data)
    else console.log("no data / no error either")
  })
})


module.exports = router