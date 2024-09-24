const findTheOldest = function(people) {
  let age = people.map((person)=>{
    if(!person.yearOfDeath){
      person.yearOfDeath = new Date().getFullYear()
    }
    return person.yearOfDeath - person.yearOfBirth
  })
  let oldest = age.indexOf(Math.max(...age))
  return people[oldest]
};

// Do not edit below this line
module.exports = findTheOldest;
