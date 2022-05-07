const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    colorId: {
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

  module.exports = colorSchema;