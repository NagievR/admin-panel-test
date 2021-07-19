const { model, Schema } = require('mongoose');

const userModel = new Schema({
  email: {
    type: String,
    required: true
  },

  // pass: {
  //   type: String,
  //   required: true,
  // },

  passHashed: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true,
    enum: ['admin', 'other']
  }
});

module.exports = model('User', userModel);
