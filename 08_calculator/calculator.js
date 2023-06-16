const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(...theArgs) {
  return theArgs.flat().reduce(function(a, b) { 
    return a + b;
  }, 0);
};

const multiply = function(...theArgs) {
  return theArgs.flat().reduce(function(a, b) { 
    return a * b;
  }, 0);
};

const power = function(...theArgs) {
  return theArgs.flat().reduce(function(a, b) { 
    return a ** b;
  }, 0);
};

const factorial = function() {
	if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
