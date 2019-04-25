const router = require('express').Router()
//This route fetches the current weather in philadelphia. This is localhost:3000/weather-api.
router.get('/cycling.png', (req, res, next) => {
  try {
    res.send('cycling.png')
  } catch (error) {
    next(error)
  }
  });

  module.exports = router
