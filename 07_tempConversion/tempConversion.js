const convertToCelsius = function(f) {
  c=(f-32)/1.8;
  return cRound = Math.round(c*10)/10;
};

const convertToFahrenheit = function(c) {
  f=(c*1.8)+32;
  return fRound = Math.round(f*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
