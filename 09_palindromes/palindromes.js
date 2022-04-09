const palindromes = function (word) {
  const pal = word.toLowerCase().replaceAll(/[\s\W]/g, "");
  let reverse = pal;
  reverse = reverse.split("").reverse().join("");
  return pal === reverse;
};

// Do not edit below this line
module.exports = palindromes;
