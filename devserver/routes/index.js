const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();
const mongoose = require('mongoose');
const {connection} = require('../db/connection.js');
const Form = require('../db/form_model.js')

router.post('/contact', async (req, res, next) => {
  const { name, email, message } = req.body

  const decodeHtml = (str) => {
    var map = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#039;': "'"
    };
    return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, (m) => map[m]);
  }

  let decodedName = await decodeHtml(name);
  let decodedEmail = await decodeHtml(email);
  let decodedMessage = await decodeHtml(message);

  // console.log("in backend ==>",decodedName, decodedEmail, decodedMessage)

  if(name == "" || email == "", message == "") {
    return res.status(400).json({ message: "Missing required fields." })
  } else {
    await connection;
    // console.log('ok it works ==>')
  
    // console.log(mongoose.connection.readyState);
  
    // console.log(name,email,message)
    let newForm = new Form({ name, email, message }) 
    await newForm.save((err, data) => {
      if(err || !data) res.status(400).json({ message: "Something went wrong sending your message!" })
      else if(data) res.status(201).json({ message: "Thank you for contacting me!" })
      // else console.log("no data / no error either")
    })
  }
})


module.exports = router