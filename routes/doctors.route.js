const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

router.get('/', async (request, response) => {
  try {
    const result = await Doctor.find({});
    response.json(result);

  } catch (error) {
    console.log(error);
    response.json({ 'message': 'error. can`t get doctors' });
  }
});

module.exports = router;


/// create user

// router.post('/', async (request, response) => {
//   const b = request.body;

//   try {
//     const doctor = new Doctor({
//       name: b.name,
//       age: b.age,
//       experience: b.experience,
//       description: b.description
//     });

//     console.log(doctor);

//     await doctor.save();

//     response.json({ message: "new doctor has created" });
  
//   } catch (error) {
//     console.log(error);
//   }
// });