const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// PATH = /api/v1/products

// GET All products
router.get('/all', ctrl.products.showAllGuitars);

// GET category
router.get('/category/:category', ctrl.products.showOneCategory);

//GET All Users guitars
router.get('/user', ctrl.products.showUserProducts);

// GET One Product
router.get('/:id', ctrl.products.show);

// ADD product
router.post('/new', ctrl.products.addProduct);

// UPDATE product
router.put('/:id', ctrl.products.updateGuitar);

// DELETE Product
router.delete('/id:', ctrl.product.deleteProduct);

module.exports = router;