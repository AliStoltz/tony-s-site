mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  category: {
    type: String,
    require: [true, 'Product category is required'],
  },
  photo: {
    type: String,
    require: [true, 'A photo is required'],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    require: [true, 'A price is required'],
  },
  creator: {
    type: String,
    require: [true, 'A product creator is required'],
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;