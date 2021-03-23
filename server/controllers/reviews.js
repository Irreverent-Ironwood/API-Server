const axios = require('axios');

// const path = "http://localhost:3001"
// const url = path + req.originalUrl

const getReviews = (req, res) => {

  axios.get('http://localhost:3000/reviews')
  .then((response) => {
    res.send(response.data);
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
  console.log(req.body);
};

const updateHelpfulness = (req, res) => {

};

const reportReviews = (req, res) => {

}


module.exports = { getReviews, getMetaReviews, postReview, updateHelpfulness, reportReviews };





