const { Schema, model } = require('mongoose');
// Import the non-model schemas to use in the tag model
// const occasionSchema = require('./schemas/occasionSchema');
// const colorSchema = require('./schemas/colorSchema');
// const typeSchema = require('./schemas/typeSchema');

const tagSchema = new Schema({
  Name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
  },
  occasions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Occasion',
    },
  ],
  colors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Color',
    },
  ],
  types: [
    {
      type:Schema.Types.ObjectId,
      ref: 'Type',
    },
  ],
});

module.exports = model('Tag', tagSchema);