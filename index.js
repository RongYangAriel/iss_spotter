// index.js
const { fetchMyIP } = require('./iss');

const { fetchCoordByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordByIP('162.245.144.188', (error, coord) => {
  if (error) {
    console.log('Coordination didn\'t work', error);
    return;
  }
  console.log("step 2 worked! Returned coord:" , coord);
})

