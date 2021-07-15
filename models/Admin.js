const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    default: '+380 (57) 725-52-63'
  },

}); 

module.exports = model('Admin', adminSchema);
