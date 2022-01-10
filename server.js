require('dotenv').config();
const express = require('express');
const routes = require('./routes/index.js')

const app = express();



// console.log(__dirname, __filename)
app.use('/', express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = '3003'


const HOST = '0.0.0.0';
app.listen(PORT, HOST , () => console.log(`app is listening on port ${PORT}`))

// app.listen(PORT, () => console.log("app is listening on port 3003"))
