const person = {
    name: 'Venice',
    age: 25,
    location: {
        city: 'Miami',
        temp: 95
    }
};
// console.log(person.location.temp);
const { temp, city } = person.location;
// console.log(temp);
// console.log(city);

//Array destructuring
const address = ['1000 Juniper St', 'Berlin', 'Germany', '191AT'];
// console.log (address[1]);

const [ street, mysport, place, code ] = address;
console.log(myspot);
