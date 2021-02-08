const address = ['1234 Junipher Street', 'Montreal', 'Quebec', 'Canada', '967832....']

const [street, city, state, country, zipcode] = address

console.log(`The city is ${city} which is located in ${state} and the street is ${street}`)


// If we want the zipcode only
const [, , , , zipcode2] = address

console.log(`The zipcode2 is ${zipcode2}`)



//-------------------------


const address2 = []

const [, , , , zipcode3='Tehran'] = address2

console.log(`The zipcode3 is ${zipcode3}`)