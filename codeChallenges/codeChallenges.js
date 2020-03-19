// =========== CODING CHALLENGES =============== 

// 1.              CAN I VOTE? 

// The most common minimum age to vote is 18. Write a function canIVote() 
// that takes in a number, representing the person’s age, and returns the boolean true 
// if they are 18 years old or older, and the boolean false if they are not.

// function canIVote(age) {
//     if(age >= 18) {
//       return true;
//     }
//     else {
//       return false;
//     }
// }
// canIVote(19);

// 2               AGREE OF DISAGREE

// Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!'
//  if the two strings are the same and 'You disagree!' if the two strings are different.

// function agreeOrDisagree(first, second) {
//     if(first === second) {
//       return 'You agree!';
//     }
//     else {
//       return 'You disagree!'
//     }
//   } 
//   agreeOrDisagree(2, 2)
  
// 3               LIFE PHASE

// Write a function, lifePhase(), that takes in a person’s age, as a number, and
// returns which phase of life they are in.
// Here are the classifications:
// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'
// If the number is less than 0 or greater than 140, the program should return 
// 'This is not a valid age'

// function lifePhase(age) {
//     if(age >= 0 && age <= 3) {
//       return 'baby';
//     }
//     if(age >= 4 && age <= 12) {
//       return 'child';
//     }
//     if(age >= 13 && age <= 19) {
//       return 'teen';
//     }
//     if(age >= 20 && age <= 64) {
//       return 'adult';
//     }
//     if(age >= 65 && age <= 140) {
//       return 'senior citizen';
//     }
//     if(age < 0 || age > 140) {
//       return 'This is not a valid age'
//     }
//   }
  
// lifePhase(19);
