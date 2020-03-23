                            // ***  .forEach()  *** //

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach((fruit) => {
    if(fruit === 'mango') {
        console.log(fruit + " = 20 rupees")
    }
    if(fruit === 'papaya') {
        console.log(fruit + " = 10 rupees")
    }
    if(fruit === 'pineapple') {
        console.log(fruit + " = 50 rupees")
    }
    if(fruit === 'apple') {
        console.log(fruit + " = 15 rupees")
    }
}) 
console.log('total price(with discount): 80 rupees');

let list = [
    {
        name: 'saad',
        age: 19,
        nationality: 'pakistani'
    },
    {
        name: 'ali',
        age: 18,
        nationality: 'american'
    },
    {
        name: 'john',
        age: 17,
        nationality: 'english'
    },
]
list.forEach((person) => {
    if (person.nationality === 'pakistani') {
        person.status = 'You are allowed to enter.'
    }
    if (person.nationality != 'pakistani') {
        person.status = 'You are not allowed to enter.'
    }
})
console.log(list);

let data = [
    {
        name: "Mr. A",
        age: 10,
        code: 101
    },
    {
        name: "Mr. B",
        age: 11,
        code: 123
    },
    {
        name: "Mr. C",
        age: 12,
        code: 129
    },
    {
        name: "Mr. D",
        age: 19,
        code: 100
    },
    {
        name: "Mr. F",
        age: 45,
        code: 555
    },
    {
        name: "Mr. X",
        age: 21,
        code: 333
    },
    {
        name: "Mr. L",
        age: 22,
        code: 929
    },
    {
        name: "Mr. O",
        age: 35,
        code: 444
    }
]
let validPersons = [];
let invalidPersons = [];
data.forEach(person => {
    if(person.code === 101 || person.code === 100 || person.code === 333) {
        person.status = 'You can enter';
        validPersons.push(person);
    }
    else {
        person.status = 'You cannot enter';
        invalidPersons.push(person);
    }
});