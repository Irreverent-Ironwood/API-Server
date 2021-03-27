const axios = require('axios');

const Product = (req, res) => {

  axios.get(`http://3.141.23.53${req.url}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((err) => {
    res.status(404);
  })
}

module.exports = { Product };
