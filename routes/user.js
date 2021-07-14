const express = require('express');
const router = express.Router();
const testSchema = require('../models/test');
//                       запрос   ответ
router.post('/', async (request, response) => {

  const { pass } = request.body;
  
  const test = new testSchema({ pass: pass });

  try {
    await test.save();
    console.log(1);
  } catch (error) {
    console.log(error);
  }
  console.log(2);
  response.json({ message: 'success' });
});

module.exports = router;
