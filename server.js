process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const mongoose = require('./config/mongoose')
const express = require('./config/express')

const db = mongoose()

const app = express()
app.listen(3000)

module.exports = app;

console.log('Server running at on localhost port : 3000');
console.log(`Process ENV : ${process.env.NODE_ENV}`)

