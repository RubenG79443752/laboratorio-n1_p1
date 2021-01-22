/*
problema 1

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/


function allLongestStrings(inputArray) {
    var larga = inputArray.reduce(function (a, b) { 
        return a.length > b.length ? a : b; 
    });
    var ArrayF = []; 
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === larga.length) {
            ArrayF.push(inputArray[i]);
        }
    }
    // return ArrayF;
}

// para ejecutar

// var inputArray = ["aba", "aa", "ad", "vcd", "aba"]
// allLongestStrings(inputArray) 

//var inputArray=["enyky","benyky","yely","varennyky"]
// allLongestStrings(inputArray)
// ["varennyky"]