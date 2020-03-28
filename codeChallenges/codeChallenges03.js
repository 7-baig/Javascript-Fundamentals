// ================================>    reverseArray()    <=======================================
// Write a function, reverseArray(), that takes in an array as an argument and returns a new array
// with the elements in the reverse order.

const sentence = ['sentence', 'a', 'is', 'this', 'now'];
const reverseArray = (arr) => {
    const reverseSentence = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseSentence.push(arr[i])
    }
    return reverseSentence; 
};
console.log(reverseArray(sentence));

/*
// Alternate solutions:

// Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

// As a function declaration:
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
*/

// ================================>    greetAliens()    <=======================================
// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print
// a greeting with each string in the array.
// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”
const aliens = ["Ala", "Bala", "Kala", "Nala", "Hala"];

const greetAliens = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
  }
}
// =================================>   convertToBaby()    <=====================================

// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop,
// returns a new array with each string in the array prepended with 'baby '.
const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)) 

// =========================>   declineEverything() and acceptEverything()    <==========================
//
// Write a function declineEverything() that takes in an array of strings and, using .forEach(),
// loops through each element in the array and calls politelyDecline() with each of them.
// The .forEach() function should apply politelyDecline() directly; it should NOT merely receive
// argument function that uses politelyDecline().

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}
// Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings
// and loops through each element in the array and grudgingly accepts each of them, by logging to
// the console in the following format: 'Ok, I guess I will eat some [element].'
const acceptEverything = arr => {
    arr.forEach(e => {
      console.log(`Ok, I guess I will eat some ${e}.`)
    })
}

// ==================================>   squareNums()    <==================================
//
// Write a function, squareNums(), that takes in an array of numbers and, using .map(),
// returns an array with the square of each of the elements of that array.
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = (arr) => {
  return arr.map(num => num * num)
}
//
// ==================================>   shoutGreetings()    <==================================
//
// Write a function shoutGreetings() that takes in an array of strings and returns a new array.
// This new array should contain all the strings from the argument array but with capitalized letters 
// and an exclamation point appended to the end: 'heya' will become 'HEYA!'
//
const list = ["cake", "donuts", "pizza", "burger", "doritos", "pringles"];
const shoutGreetings = (arr) => {
    return arr.map(word => {
        return `${word.toUpperCase()}!`
    })
  }

const result = shoutGreetings(list);
console.log(result);
//
// ==================================>   sortYears()    <==================================
// Write a function sortYears() that takes in an array of years, and, using the built-in
// .sort() method, returns that array with the years sorted in descending order.
const nums = [5, 4, 3, 2, 1];
const sortYears = (num) => {
    return num.sort().reverse();
}
const res = sortYears(nums)
console.log(res);
//
// ==================================>   justCoolStuff()    <==================================
//
// Write a function justCoolStuff() that takes in two arrays of strings, and, using the 
// built-in .filter() method, returns an array with the items that are present in both arrays.
const object1 = ['remote', 'bottle', 'telephone', 'tray', 'stick'];
const object2 = ['charger', 'bottle', 'helmet', 'clock', 'stick'];
const justCoolStuff = (obj1, obj2) => obj1.filter(word => obj2.includes(word));
console.log(justCoolStuff(object1, object2));
//
// ==================================>   isTheDinnerVegan()    <==================================
//
// Write a function isTheDinnerVegan() that takes in an array of food objects and returns 
// a boolean value based on whether or not every item in the array has entirely plant-based origins.
//
const isTheDinnerVegan = (arr) => {
    return arr.every(food => {
      if(food['source'] === 'plant') {
        return true
      }
      else {
        return false
      }
    })
};  
const dinner = [
    {name: 'hamburger', source: 'meat'},
    {name: 'cheese', source: 'dairy'}, 
    {name: 'ketchup', source:'plant'}, 
    {name: 'bun', source: 'plant'}, 
    {name: 'dessert twinkies', source:'unknown'}
];  
console.log(isTheDinnerVegan(dinner));
//
// ==================================>   sortSpeciesByTeeth()    <==================================
//
// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
// {speciesName: 'shark', numTeeth: 50 }
// and sorts the array in ascending order based on the average number of teeth that 
// species possesses (numTeeth) .
// You’ll need to access each object’s .numTeeth property. Feel free to either write
// a named comparison function, or use an anonymous function for your argument to .sort().

const speciesArray = [ 
    {speciesName:'shark', numTeeth:50},                     
    {speciesName:'dog', numTeeth:42},                       
    {speciesName:'alligator', numTeeth:80},                 
    {speciesName:'human', numTeeth:32} 
  ];
  const sortSpeciesByTeeth = (arr) => {
    return arr.sort(animal => {
      animal.numTeeth;
    })  
};
console.log(sortSpeciesByTeeth(speciesArray))
//
// ==================================>   findMyKeys()    <==================================
// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain
// 'keys'. If the keys are in the array, your function should return the index at which they can be
// found. If they’re not in the array, your function should return -1.
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
const findMyKeys = arr => arr.findIndex(obj => obj === 'keys')
console.log(findMyKeys(randomStuff));
// 
// ==================================>   dogFactory()    <==================================
//
// Write a function, dogFactory(). It should:
// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the 
// values of the arguments that were passed in
// Add getters and setters for each of the three properties and change the property names to
// have an underscore prepended.
// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and
// .eatTooManyTreats() which should increment the weight property by 1.
//
const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
}
