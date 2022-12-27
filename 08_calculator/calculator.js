const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayOfNums) {
	return arrayOfNums.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
};

const multiply = function(arrayOfNums) {
  return arrayOfNums.reduce((accumulator, currentVal) => accumulator * currentVal, 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num < 0 || typeof(num) != 'number') {
    return 'ERROR';
  } else if (num == 0) {
    return 1;
  }

  let newArray = Array.from({length: num}, (x, i) => i+1);
  return newArray.reduce((previousVal, currentVal) => previousVal * currentVal, 1);
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
