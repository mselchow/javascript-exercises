const findTheOldest = function (people) {
  people.sort((a, b) => {
    const aDeath = a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear();
    const bDeath = b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear();
    return aDeath - a.yearOfBirth > bDeath - b.yearOfBirth ? -1 : 1;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
