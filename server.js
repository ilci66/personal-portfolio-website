require('dotenv').config();
const express = require('express');
const routes = require('./routes/index.js')





const app = express();


// console.log(__dirname, __filename)
app.use('/', express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3003, () => console.log("app is listening on port 3003"))