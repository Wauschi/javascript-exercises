const convertToCelsius = function(temp) {
  let tempconverted = (temp - 32) * (5/9) 
  if (tempconverted % 1 == 0) {
    return tempconverted
  } else {
    return(Number(tempconverted.toFixed(1)));
  }
};

const convertToFahrenheit = function(temp) {
  let tempconverted = temp *(9/5) +32;
  if(tempconverted % 1 == 0){
    return tempconverted
  } else {
    return(Number(tempconverted.toFixed(1)));
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
