const express = require('express');
const router = express.Router();
const testSchema = require('../models/test');
//                       запрос   ответ
router.post('/', async (request, response) => {
  const { pass } = request.body;
  
  const test = new testSchema({ pass: pass });

  try {
    await test.save();
  } catch (error) {
    console.log(error);
  }
  response.json({ message: 'success' });
});

module.exports = router;
