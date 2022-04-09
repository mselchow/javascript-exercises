const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  if (nums.length > 0) {
    return nums.reduce((prev, current) => prev + current);
  } else {
    return 0;
  }
};

const multiply = function (nums) {
  if (nums.length > 0) {
    return nums.reduce((prev, current) => prev * current);
  } else {
    return 0;
  }
};

const power = function (a, b) {
  let total = a;
  for (let i = 1; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
      sum *= i;
    }
    return sum;
  }
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
