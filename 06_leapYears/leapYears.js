const leapYears = function (nr) {
    if(nr % 4 == 0){
        if(nr % 100 == 0){
            if(nr % 400 == 0){
                return(true)
            }
            return(false)
        }
        return(true)
    } else{
        return(false)
    }
};

// Do not edit below this line
module.exports = leapYears;
