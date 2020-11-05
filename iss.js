const request = require('request');



/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) { 
  // use request to fetch IP address from JSON API
  let url = 'https://api.ipify.org/?format=json';
  request(url, (error, response, body) => {
    console.log('Fetching');
    if(error) {
      callback(error, null);
      return;
    }
    if(response.statusCode !== 200) {
      console.log(response.statusCode);
      callback(`Status code ${response.statuCode} when fetching IP: ${body}`, null);
      return;
    }
    let data = JSON.parse(body);
    callback(null, data.ip);
  });
}


const fetchCoordByIP = (ip, callback) => {
  let url = `https://ipvigilante.com/${ip}`;
  console.log("Fetching Step 2......" + url);
  request(url, (error, response, body) => {
    if(error) {
      callback(error, null);
      return;
    }
    if(response.statusCode !== 200) {
      callback(`Status code ${response.statuCode} when fetching Coord: ${body}`, null);
      return;
    }
    let {latitude, longitude} = JSON.parse(body).data;
    callback(null, {latitude, longitude});
  })
}

module.exports = { fetchMyIP };
module.exports = { fetchCoordByIP };