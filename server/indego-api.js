require('dotenv').config()
const router = require('express').Router()
const axios = require('axios')

router.get('/', async (req, res, next) => {
  try {
    console.log('MADE IT TO INDEGO ROUTE')
    const response = await axios.get('https://www.rideindego.com/stations/json')
    console.log(response)
    res.send(response)
  } catch (error) {
    next(error)
  }
  });

  module.exports = router
