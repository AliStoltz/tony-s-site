const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, 'username is required'],
  },
  email: {
    type: String, 
    require: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    require: [true, 'Password is required'],
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;