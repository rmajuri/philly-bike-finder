require('dotenv').config()
const router = require('express').Router()
const axios = require('axios')

router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get(`http://${process.env.WEATHER_API}`)
    res.json(response.data)
  } catch (error) {
    next(error)
  }
  })

  module.exports = router
