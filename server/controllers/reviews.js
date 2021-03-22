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






