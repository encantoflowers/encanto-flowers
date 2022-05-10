const { Schema, model } = require('mongoose');

const colorSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    }
  });

  module.exports = model('Color', colorSchema);