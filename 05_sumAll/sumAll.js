const sumAll = function(startNum,finNum) {
    if (typeof startNum !== 'number'|| typeof finNum !== 'number'||startNum < 0 || finNum < 0 || isNaN(startNum) || isNaN(finNum)) {
        return 'ERROR';
      }s
    
      const min = Math.min(startNum, finNum);
      const max = Math.max(startNum, finNum);
    
      const sum = ((max - min + 1) * (min + max)) / 2;
      return sum;
};

module.exports = sumAll;
