// index2.js

const { fetchMyIP } = require('./iss_promised');

fetchMyIP()
  .then(fetchMyIP())
  .then(body => console.log(body));