const repeatString = function(string,number) {
    if (number < 0) {
        return "ERROR"
    }
    var output = "";
    for (let index = 0; index < number; index++) {
        output = output + string;
        
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
