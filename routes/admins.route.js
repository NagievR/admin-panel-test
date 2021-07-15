const express = require('express');
const router = express.Router();
const adminsSchema = require('../models/Admin');

router.get('/', async (request, response) => {
  try {
    const result = await adminsSchema.find({});
    response.json(result);
    console.log(response);

  } catch (error) {
    console.log(error);
    response.json({ 'message': 'error. can`t get tests' });
  }
});

module.exports = router;
