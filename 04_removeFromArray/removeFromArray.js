const removeFromArray = function() {
    let tmp = arguments[0];
    let index;

    for (let i = 1; i < arguments.length; i++) {
        index = tmp.indexOf(arguments[i]);
        if (index > -1) {
          tmp.splice(index, 1);
        }
    }

    return tmp;
};

// Do not edit below this line
module.exports = removeFromArray;
