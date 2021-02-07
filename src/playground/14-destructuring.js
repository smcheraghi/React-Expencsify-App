// object destructring -> take object and repeat a part -> means use name instead of person.name -> remove the object name (person)
const person = {
    name: 'Mohammad',
    age: 37,
    location: {
        city: 'Montreal',
        temp: 88
    }
};

const {name: firstName = 'Anonymous', age} = person
console.log(`I am ${firstName} and I am ${age} years old`)

const {city, temp: temperature} = person.location
console.log(`The temperature is ${temperature} in ${city}`)