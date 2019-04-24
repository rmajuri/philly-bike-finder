require('dotenv').config()
const router = require('express').Router()
const axios = require('axios')
const request = require('request-promise');

const requestOptions = {
  uri: process.env.INDEGO_API,
  json: true
};

router.get('/', async (req, res, next) => {
  try {
    console.log('MADE IT TO INDEGO ROUTE')

    const stationData = await request(requestOptions);
    res.json(stationData)
  } catch (error) {
    next(error)
  }
})

module.exports = router
