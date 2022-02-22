const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numlist) {
  let sum = 0;
  let flen = numlist.length;
  for (let i = 0; i < flen; i++) {
    sum += numlist[i];
  }
  return sum;
};

const multiply = function (numlist) {
  let sum = 1;
  let flen = numlist.length;
  for (let i = 0; i < flen; i++) {
    sum *= numlist[i];
  }
  return sum;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let sum = 1;
  for (i = 1; i <= x; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
