//        SOME
// Array.prototype.some(callbackFn(element[, index[, array]])[, thisArg])
// Returns true if at least one element in this array satisfies the provided testing callbackFn.       
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
  return word.length < 6;
}));

//        EVERY
// Array.prototype.every(callbackFn(element[, index[, array]])[, thisArg])
// Returns true if every element in this array satisfies the testing callbackFn.
console.log(interestingWords.every((word) => {
  return word.length > 5;
} ));

//        SPLIT
// The split() method is used to split a string into an array of substrings, 
// and returns the new array.
// Tip: If an empty string ("") is used as the separator, the string is split
// between each character.
// Note: The split() method does not change the original string.
var str = "How are you doing today?";
var res = str.split(" ");