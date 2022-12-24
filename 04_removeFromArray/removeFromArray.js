const removeFromArray = function(arrayToModify) {
    let index;
    let argument;
    
    for (let i=1; i < arguments.length; i++) {
        argument = arguments[i];
        if (arrayToModify.includes(argument)) {
            index = arrayToModify.indexOf(argument)
            arrayToModify.splice(index,1);
            // console.log(`Arguments: ${JSON.stringify(arguments)}\nArgument: ${argument}, Index: ${index}, Array: ${arrayToModify}`)
        }  
    }
    return arrayToModify;
};

// Do not edit below this line
module.exports = removeFromArray;
