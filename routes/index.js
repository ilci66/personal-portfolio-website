const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();

router.post('/', (req, res, next) => {
  const {fname:name, femail:email, fmessage:message} = req.body
  console.log(name,email,message)
  console.log('ok it works')
})


module.exports = router