const axios = require('axios');

const getReviews = (req, res) => {

  axios.get(`http://ec2-3-92-221-72.compute-1.amazonaws.com:5000${req.url}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((err) => {
    res.status(404);
  })
}

module.exports = { getReviews };






