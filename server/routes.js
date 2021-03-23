const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/products/*', controller.qa);
router.get('/reviews', controllers.reviews.getReviews);
router.get('/reviews/meta', controllers.reviews.getMetaReviews);
router.post('/reviews', controllers.reviews.postReview);
router.put('/reviews/:review_id/helpful', controllers.reviews.updateHelpfulness);
router.put('/reviews/:review_id/report', controllers.reviews.reportReviews);


module.exports = router;
