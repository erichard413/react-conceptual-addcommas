const commaNumber = require('comma-number')

// ------using commaNumber package:
// function addCommas(input) {
//     return commaNumber(input);
// }

// -------using for loop:
function addCommas(input) {
    let strInput = String(input);
    if (strInput[0] == '-') {
        strInput = strInput.slice(1);
    }

    let commaIdx;
    if (strInput.includes('.')) {
        commaIdx = strInput.indexOf('.');
    } else {
        commaIdx = strInput.length;
    }
    
    let decimals = strInput.slice(commaIdx);
    let returnStr = ""
    for(let i = commaIdx -1; i >= 0; i--) {
        returnStr = strInput[i] + returnStr;
        if ((commaIdx - i) %3 == 0) {
            returnStr = ',' + returnStr;
        }
    }
    return (input < 0 ? '-': "") + returnStr + decimals;
}

module.exports = addCommas;