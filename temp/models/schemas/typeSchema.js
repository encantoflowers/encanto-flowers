const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    typeId: {
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

  module.exports = typeSchema;