const reverseString = function(string) {
    let ArrayOfLetters = string.split("")
    let output = ""
    
    for (let index = ArrayOfLetters.length-1; index >= 0; index--) {
        output = output + ArrayOfLetters[index];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
