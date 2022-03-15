const reverseString = function(text) {
    let output = "";
    for (let i = text.length; i > 0; i--) {
        output += text[i - 1];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
