const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(array) {
	return array.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(array) {
    return array.reduce((acc, cur) => acc * cur);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0) return 1;
    total = 1;
    for(let i = 1; i <= a; i++) {
        total *= i;
    }

    return total;
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