require('dotenv').config()
const router = require('express').Router()
const axios = require('axios')

router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?id=4560349&units=imperial&APPID=a08ca9062ef242e0e8c2aa82e466838a')
    res.json(response.data)
  } catch (error) {
    next(error)
  }
  })

  module.exports = router
