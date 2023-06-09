const removeFromArray = function(Array,...RemoveObject) {
    for (let index = 0; index < RemoveObject.length; index++) {
        let stelle = Array.indexOf(RemoveObject[index])
        if (stelle >-1) {
            Array.splice(stelle,1)
        }
    }
    return Array
};

// Do not edit below this line
module.exports = removeFromArray;
