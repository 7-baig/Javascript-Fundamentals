// ===========================> CHALLENGE 01 <============================== //

// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// =========> FIRST SOLUTION
function createPhoneNumber(arr) {
    let mask = '(xxx) xxx-xxxx';

    arr.forEach(item => {
        mask = mask.replace('x', item);
    });

    return mask;
}
// =========> SECOND SOLUTION
function createPhoneNumberr(arr) {
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
}