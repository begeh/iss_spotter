// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP('66.207.199.230', (error, data) =>{
  let coord = {};
  coord.latitude = data.latitude;
  coord.longitude = data.longitude;
  console.log(coord);
});