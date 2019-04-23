require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//This send requests to /weather-api to the weather-api.js file
app.use('/weather-api', require('./weather-api'))

//This serves up the static files
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message)
})

module.exports = app
