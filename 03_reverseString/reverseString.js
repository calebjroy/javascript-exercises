const reverseString = function(string) {
    let newString = [];
    for (let char in string) {
        newString.unshift(string[char]);
    }
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
