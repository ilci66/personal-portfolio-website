require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')
const helmet = require('helmet')
const app = express();

app.use(helmet());

app.use(bodyParser.json({limit: '1mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '1mb', extended: true }))

app.use('/', express.static(__dirname + '/public'));
app.use('/', routes)

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const PORT = '3003'


const HOST = '0.0.0.0';
app.listen(PORT, HOST , () => console.log(`app is listening on port ${PORT}`))

// app.listen(PORT, () => console.log("app is listening on port 3003"))