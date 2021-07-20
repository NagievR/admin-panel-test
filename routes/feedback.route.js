const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.get('/', async(request, response) => {
  try {
    const result = await Feedback.find({});
    response.json(result);

  } catch (error) {
    console.log(error);
    response.json({ 'message': 'error. can`t get tests' });
  }
});

router.post('/new', async (request, response) => {
  try {
    const b = request.body;
    const feedbackData = {
      name: b.name,
      comment: b.comment,
      phone: b.phone
    };
    const feedback = new Feedback({ ...feedbackData });
    await feedback.save();
    response.json({ message: 'success' });

  } catch (error) {
    console.log(error);
    response.json({ message: 'error. cannot add new feedback' });
  }
  
});


module.exports = router;
