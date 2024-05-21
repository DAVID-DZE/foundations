function getAge(birthYear, deathYear) {
    if(!deathYear)
        return new Date().getFullYear() - birthYear;

    return deathYear - birthYear;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
          currentPerson.yearOfBirth,
          currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;