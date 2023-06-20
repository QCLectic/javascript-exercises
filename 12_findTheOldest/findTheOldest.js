const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
    };
    
    const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
    };
    

//compare array of objects, return oldest person among them.

//if no death year is provided, use current year.
//subtract current year from birth year. store result in array tied to name
//sort the array by age
//return name of oldest person


// tbh. i had issues with completing this one. however i knew some key words to find my answer. i knew i had an array of objects. I needed to compare values of age. It has an interesting comparing function.
// Do not edit below this line
module.exports = findTheOldest;
