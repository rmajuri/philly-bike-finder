const router = require('express').Router()
const request = require('request-promise');

const requestOptions = {
  uri: 'https://www.rideindego.com/stations/json',
  json: true
}

router.get('/', async (req, res, next) => {
  try {
    const {features} = await request(requestOptions)
    res.json(features)
  } catch (error) {
    next(error)
  }
})

module.exports = router
