const express = require('express');
const controllers = require('./controllers');
const router = express.Router();
const { qa } = require('./controllers/qa');

router.get('/qa/*', qa);
router.get('/reviews/*', controllers.reviews.getReviews)



module.exports = router;
