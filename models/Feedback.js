const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  comment: {
    type: String,
    required: true
  },

  viewed: {
    type: Boolean,
    default: false
  },

  date: {
    type: Number,
    default: +new Date()
  }

});

module.exports = model('Feedback', feedbackSchema);
