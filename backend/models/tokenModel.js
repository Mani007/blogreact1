const mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
              
    },
    refreshToken: {
        type: String,
        required: true,
        index: true,
    },
  });

  const tokenModel = mongoose.model('tokenSchema', tokenSchema);

  module.exports = tokenModel;
