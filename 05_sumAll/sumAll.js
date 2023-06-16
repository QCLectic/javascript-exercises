const sumAll = function(startNum,finNum) {
    if (startNum < 0 || finNum < 0 || isNaN(startNum) || isNaN(finNum)) {
        return 'Error';
      }
    
      const min = Math.min(startNum, finNum);
      const max = Math.max(startNum, finNum);
    
      const sum = ((max - min + 1) * (min + max)) / 2;
      return sum;
};
//okay so on this one we need to sum each number from start number to final number. 
//startNum, FinNum
//finNum-startNum to get difference AKA how often we need to iterate
//iterate from startNum
//i=diffNum; i<=; i++;
// startNum
//spit out error on non valid inputs

//i think i need to actually have 2 parts. one to count and store each count to array
// add the array
// so we do need the start and fin.
// Do not edit below this line

// looks like we need to modify the logic to not accept negative numbers as well as to print error if a string is provided
module.exports = sumAll;
