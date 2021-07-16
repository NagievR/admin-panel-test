const { Schema, model } = require('mongoose');

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  experience: {
    type: Number
  },

  description: {
    type: String,
    required: true
  },

  img: {
    type: String,
  }

});

module.exports = model('Doctor', doctorSchema);