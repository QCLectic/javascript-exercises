const fibonacci = function(num) {
    let a = 0, b = 1, temp;

    if (num<0){
        return 'OOPS'
    } else
        while (num >= 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
        };
        
        return b;
    ;

};
//loop up to number given
//given number in sequence will equal previous function minus one combined with previous to last function minus 2
//uses recursive function uses givent first term of sequence and pattern rule to get any term from previous term.

// var num1 = 1, num2 = 0, temp;

// while (num >= 0){
//   temp = num1;
//   num1 = num1 + num2;
//   num2 = temp;
//   num--;
// }

// return num2;
// Do not edit below this line
module.exports = fibonacci;
