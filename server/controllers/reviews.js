const axios = require('axios');

const getReviews = (req, res) => {

  axios.get(`http://52.23.178.221:5000${req.url}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((err) => {
    res.status(404);
  })
}

module.exports = { getReviews };






