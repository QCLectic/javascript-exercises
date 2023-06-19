const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;

};
palindromes('race car');
//receive text as variable
// remove spaces and punctuation
// reverse text order as variable
// compare text with rev text, if equal true, if not false.
// Do not edit below this line
module.exports = palindromes;
