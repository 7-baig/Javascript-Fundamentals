                            //  *** FILTER *** //

// return values that are less than 250

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

// return elements that have more than 7 characters.

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

// *** Removing Duplicates from an Array *** (CHAINING ARRAY METHODS)

// To remove duplicate elements from an array, we can use filter(). 
// Remember, the filter method provides three parameters to our callback 
// function: the current element being processed in the array, the index of
// the current element being processed in the array, and the array filter() was called upon.
// We can compare the index of the current element to the index of the current element
// in the array that filter() was called upon to determine if we've already
// encountered that element value. This works because the indexOf method will return the
// index of the first occurrence that is found in the array. So, indexes of duplicate 
// elements will not equal the index of the first occurrence of their values.

const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function(number, index, array) {
  return index === array.indexOf(number);
});

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]