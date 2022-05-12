const { Schema, model } = require('mongoose');

const typeSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    }
  });

  module.exports = model('Type', typeSchema);