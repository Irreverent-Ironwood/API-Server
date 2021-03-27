const axios = require('axios');

const getReviews = (req, res) => {

  axios.get(`http://54.86.59.129:5000${req.url}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((err) => {
    res.status(404);
  })
}

module.exports = { getReviews };






