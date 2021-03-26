const axios = require('axios');
const path = 'http://3.139.79.103';


const qa = (req, res, next) => {
  axios(path + req.url)
  .then(({ data }) => {
    res.send(data);
    next();
  })
  .catch((err) => {
    res.status(400);
    next();
  })
}

module.exports = { qa }

