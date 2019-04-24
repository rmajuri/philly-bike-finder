require('dotenv').config()
const router = require('express').Router()
const request = require('request-promise');

const requestOptions = {
  uri: process.env.INDEGO_API,
  json: true
};

router.get('/', async (req, res, next) => {
  try {
    console.log('MADE IT TO INDEGO ROUTE')

    const {features} = await request(requestOptions);
    res.json(features)
  } catch (error) {
    next(error)
  }
})

module.exports = router
