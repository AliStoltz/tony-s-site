const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
})

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;