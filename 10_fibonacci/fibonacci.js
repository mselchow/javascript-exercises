const fibonacci = function (term) {
  if (term >= 0) {
    const phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(
      (Math.pow(phi, term) - Math.pow(1 - phi, term)) / Math.sqrt(5)
    );
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
