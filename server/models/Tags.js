const mongoose = require('mongoose');
// Import the non-model schemas to use in the tag model
const occasionSchema = require('./schemas/occasionSchema');
const colorSchema = require('./schemas/colorSchema');
const typeSchema = require('./schemas/typeSchema');

const tagSchema = new mongoose.Schema({
  occasions: [occasionSchema],
  colors: [colorSchema],
  types: [typeSchema],
});

module.exports = mongoose.model('Tags', tagSchema);