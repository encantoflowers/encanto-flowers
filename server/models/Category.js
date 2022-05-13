const { Schema, model } = require('mongoose');
// Import the non-model schemas to use in the tag model
// const occasionSchema = require('./schemas/occasionSchema');
// const colorSchema = require('./schemas/colorSchema');
// const typeSchema = require('./schemas/typeSchema');

const categorySchema = new Schema({
  Name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
  },
});

module.exports = model('Category', categorySchema);