const express = require('express');

const router = express.Router();

router.get('/reviews', controllers.reviews);


module.exports = router;
