const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    maxlength: 32,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  history: {
    type: Array,
    default: [],
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);