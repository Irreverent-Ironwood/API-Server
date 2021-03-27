const express = require('express');
const controllers = require('./controllers');
const router = express.Router();
const { qa } = require('./controllers/qa');
const Products = require('./controllers/Product.js') 

router.get('/qa/*', qa);
router.get('/reviews/*', controllers.reviews.getReviews)
router.get('/products/*', controllers.Products.Product)



module.exports = router;
