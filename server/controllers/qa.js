const axios = require('axios');
const path = 'http://18.219.80.119:3003';


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

