const mongoose = require('mongoose');

const occasionSchema = new mongoose.Schema({
    occasionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    }, 
    Name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    }
  });

  module.exports = occasionSchema;