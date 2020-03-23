//  We sometimes want to find the location of an element in an array. 
// That’s where the .findIndex() method comes in! Calling .findIndex() 
// on an array will return the index of the first element that evaluates 
// to true in the callback function.

// Invoke .findIndex() on the animals array to find the index of the element that
// has the value 'elephant'
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'
})
// return the index of the first element that starts with 's'
const startsWithS = animals.findIndex(letter => {
  return letter[0] ==='s'
})
