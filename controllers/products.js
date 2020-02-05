const db = require('../models');

// delete all
const deleteAllProducts = (req, res) => {
  db.Product.deleteMany({}, (error, deleteProducts) => {
    if (error) return console.log(error);
    res.json({
      status: 200,
      data: deletedProducts
    });
  });
};


// GET all products
const showAllProducts = (req, res) => {
  db.Product.find({})
  .populate('user')
  .exec((error, allProducts) => {
    if (error) return res.status(500).json({
      status: 500,
      message: error
    });
    res.status(200).json({
      status: 200,
      data: allProducts
    });
  });
};

// GET products by category
const showCategory = (req, res) => {
  db.Product.find({category:req.params.category}, (error, foundCategory) => {
    if (error) return res.status(500).json({
      status: 500,
      message: error,
    });
    res.status(200).json({
      status: 200,
      message: foundCategory
    });
  });
};


// GET all user Products
const showUserProducts = (req, res) => {
  db.Product.find({user: req.session.currentUser.id})
  .populate('user')
  .exec((error, userProducts) => {
    if (error) return res.status(500).json({
      status: 500,
      message: error
    });
    res.status(200).json({
      status: 200, 
      message: userProducts
    });
  });
};


// GET one Product 
const show = (req, res) => {
  db.Product.findById(req.params.id)
  .populate('user')
  .exec((error, foundProduct) => {
    if (error) return res.status(500).json({
      status: 500,
      message: error
    });
    res.status(200).json({
      status: 200,
      data: foundProduct
    });
  });
};


const addProduct = (req, res) => {
  const productData = {...req.body, user: req.session.currentUser.id};
  db.Product.create(productData, (error, createdProduct) => {
    if ( error) return console.log(error);
    res.json({
      status: 201,
      data: createdProduct,
    });
  });
};


// delete one Product
const deleteProduct = (req, res) => {
  db.Product.findByIdAndDelete(req.params.id, (error, deletedProduct) => {
    if (error) return console.log(error);
    res.json({
      status: 200,
      data: deletedProduct
    });
  });
};

// Update One Product
const updateProduct = (req, res) => {
  db.Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updateProduct) => {
    if (error) return console.log(error);
    res.json({
      status: 201,
      data: updateProduct,
    });
  });
};

modules.exports = {
  deleteAllProducts,
  show,
  showUserProducts,
  showAllProducts,
  updateProduct,
  deleteProduct,
  addProduct, 
  showCategory
};