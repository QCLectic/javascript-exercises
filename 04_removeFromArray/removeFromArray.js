const removeFromArray = function(array,...theArgs) {
    // let position=array.includes(...theArgs,0);
    //return array.splice(position)
    //   else return array;
    // I had settled on using the array.filter but wasnt sure how to implement
    //array.filter(function(...theArgs))
    return array.filter(val => !theArgs.includes(val))
};
// using splice() to remove target in the array defined by ....theARGS
// return array
// Do not edit below this line
module.exports = removeFromArray;
