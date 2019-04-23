require('dotenv').config()
const router = require('express').Router()
const axios = require('axios')

//This route fetches the current weather in philadelphia. This is localhost:3000/weather-api.
router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get(`http://${process.env.WEATHER_API}`)
    console.log(response.data)
    res.json(response.data)
  } catch (error) {
    next(error)
  }
  });

  module.exports = router
