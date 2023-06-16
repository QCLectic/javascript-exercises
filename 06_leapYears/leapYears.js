const leapYears = function(year) {
    //year is not divisable by 100 && is  divisable by 400 && is divsable by 4= leap year no
    //else = leap year yes
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Do not edit below this line
module.exports = leapYears;
