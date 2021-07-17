const { Schema, model } = require('mongoose');

const fileSchema = new Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String
});

module.exports = model('Doctor', {
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

  // createdAt: {
  //   type: Number,
  //   default: +new Date()
  // },

  uploadedFile: fileSchema
});
