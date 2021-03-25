const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

// router.get('/products/*', controllers.qa);
router.get('/reviews/*', controllers.reviews.getReviews)



module.exports = router;
