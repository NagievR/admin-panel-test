const { Schema, model } = require('mongoose');

const testSchema = new Schema({
  name: {
    type: String,
    default: 'test'
  },

  pass: {
    type: String,
  },

  age: {
    type: Number,
    default: 28
  },

  testArray: {
    type: Array,
    default: ['test', 'foo', 1, 2, 4]
  },

  testObj: {
    type: Object,
    default: {
      foo: 1,
      bar: 'test',
      test: ['arr', 1, 2, 4]
    }
  }
});

module.exports = model('Test', testSchema);
