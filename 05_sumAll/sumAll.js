const sumAll = function(start, end) {
    let sum = 0;
    let startNum, endNum;

    if (start < 0 || end < 0) {
        return "ERROR";
    }

    if (typeof (start) != "number" || typeof (end) != "number") {
        return "ERROR";
    }

    if (start > end) {
        startNum = end;
        endNum = start;
    } else {
        startNum = start;
        endNum = end;
    }

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
