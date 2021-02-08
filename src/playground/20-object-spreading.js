const user = {
    name: 'ali',
    age: 27,
    sex:'male'
}

console.log({
    ...user,
    age: 35,
    address:'sherbrook west'
})