const express = require('express');
const axios = require('axios');

const router = require('./routes.js');


const app = express();
const port = 3001;

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Connecting to port ${port}`)
});