const axios = require('axios');

const getReviews = (req, res) => {
  axios.get('/reviews')
  .then((res) => {
    res.send(res.data);
  })
  .catch((err) => {
    console.log('error getting reviews');
  })
}

const getMetaReviews = (req, res) => {
  axios.get('/reviews/meta')
  .then((res) => {
    res.send(res.data);
  })
  .catch((err) => {
    console.log('error getting meta reviews');
  })
}

const postReview = (req, res) => {
  
};

const updateHelpfulness = (req, res) => {

};

const reportReviews = (req, res) => {

}


module.exports = { getReviews, getMetaReviews, postReview, updateHelpfulness, reportReviews };





