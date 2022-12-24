const sumAll = function(val1, val2) {
    // Input validation
    if ((val1 < 0 || val2 < 0) || (typeof(val1) != 'number' || typeof(val2) != 'number')) {
        return 'ERROR';
    }

    if (val1 < val2) {
        smallerVal = val1;
        largerVal = val2;
    } else {
        smallerVal = val2;
        largerVal = val1;
    }

    // Process values
    const numOfElements = largerVal - smallerVal + 1;
    let arrayToSum = Array.from({length: numOfElements}, (x, i) => i+1);
    let sum = arrayToSum.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
