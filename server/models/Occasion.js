const { Schema, model } = require('mongoose');

const occasionSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    }
  });

  module.exports = model('Occasion', occasionSchema);