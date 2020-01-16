// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP('66.207.199.230', (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  let coord = {};
  coord.latitude = data.latitude;
  coord.longitude = data.longitude;
  console.log(coord);
});

fetchISSFlyOverTimes({ latitude: '43.644098', longitude: '-79.402316' }, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned flyover times:' , data);
})