                            // ***  MAP *** //

// Use .map() to create a new array that contains the first character of each string in the animals
// array. Save the new array to a const variable named secretMessage.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(word => {
  return word[0];
})
console.log(secretMessage.join(''));

// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable
// declared with const called smallNumbers.

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
})
console.log(smallNumbers);

let firstName = ['saad', 'john'];
let lastName = ['baig', 'anderson'];

const fullName = firstName.map(first => {
    if(first === 'saad') {
        return first + " baig";
    }
    else {
        return first + " anderson"
    }
})
console.log(fullName)
