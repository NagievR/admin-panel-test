const express = require('express');
const router = express.Router();
const testSchema = require('../models/test');

router.get('/', async(request, response) => {
  try {
    const result = await testSchema.find({});
    response.json(result);

  } catch (error) {
    console.log(error);
    response.json({ 'message': 'error. can`t get tests' });
  }
});

module.exports = router;

/// create test
// router.post('/', async (request, response) => {
//   const { pass } = request.body;
  
//   const test = new testSchema({ pass: pass });

//   try {
//     await test.save();
//     response.json({ message: 'success' });
    
//   } catch (error) {
//     console.log(error);
//     response.json({ message: 'error' + error });
//   }
  
// });
