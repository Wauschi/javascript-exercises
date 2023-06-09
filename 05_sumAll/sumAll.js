const sumAll = function(number1, number2) {
    let sum = 0
    let nr1 = 0;
    let nr2 = 0;
    if(typeof number1 !== 'number'){
        return("ERROR")
    }
    if(typeof number2 !== 'number'){
        return("ERROR")
    }
    if(number1 <0){
        return("ERROR")
    }
    if(number2 <0){
        return("ERROR")
    }
    if (number1 > number2 ) { 
        nr1 = number2;
        nr2 = number1;
    } else {
        nr1 = number1;
        nr2 = number2;
    }
    for (let index = nr1; index <= nr2; index++) {
        sum = sum + index;
        
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
