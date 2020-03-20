// ************************************************************8
//          =========== CODING CHALLENGES =============== 
// ************************************************************8


// ====================================================
// 1.              CAN I VOTE? 
// ====================================================
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
// ====================================================
// 2               AGREE OF DISAGREE
// ====================================================
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
// ====================================================  
// 3               LIFE PHASE
// ====================================================
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
// ====================================================
//  4                 Final Grade
// ====================================================
// const finalGrade = (midterm, final, homework) => {
//     if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
//         return 'You have entered an invalid grade.'
//     }
//     let average = (midterm + final + homework) / 3
//     if (average < 60) {
//         return 'F'
//     }
//     else if (average < 70) {
//         return 'D'
//     }
//     else if (average < 80) {
//         return 'C'
//     }
//     else if (average < 90) {
//         return 'B'
//     } else {
//         return 'A'
//     }
// }
// console.log(finalGrade(70, 80, 90))
// ====================================================
//  5         Roll the Dice
// ====================================================
// We wrote a function, rollTheDice(), which is supposed to simulate two dice being 
// rolled and totalled. It’s close to doing what we want, but there’s something not quite 
// right. Can you fix our code, please?

// const rollTheDice = () => {
//     // Math.random() gives us a random number from 0 up to, but not including, 1
//     // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
//     // But since we actually wanted numbers from 1 to 6, inclusive, we added 1

//       let die1 = Math.floor(Math.random() * 6 + 1)
//       let die2 = Math.floor(Math.random() * 6 + 1)
//       return die1 + die2
// }
// ====================================================
//  6               Calculate Weight
// ====================================================
// Write a function, calculateWeight(). It should:
// have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in.
// Handle the following cases:
// 'Mercury' weight = earthWeight * 0.378
// 'Venus' weight = earthWeight * 0.907
// 'Mars' weight = earthWeight * 0.377
// 'Jupiter' weight = earthWeight * 2.36
// 'Saturn' weight = earthWeight * 0.916
// For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, 
// Jupiter, or Saturn.'

// const calculateWeight = (earthWeight, planet) => {
//     switch (planet) {
//         case 'Mercury':
//             return earthWeight * .378;
//         case 'Venus':
//             return earthWeight * .907;
//         case 'Mars':
//             return earthWeight * .377;
//         case 'Jupiter':
//             return earthWeight * 2.36;
//         case 'Saturn':
//             return earthWeight * .916;
//         default:
//             return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
//     }
// }
// ====================================================
//  7           Imaginary Friends
// ====================================================
// A person’s number of imaginary friends are always 33% of their total friends.
// Write a function, numImaginaryFriends(), that takes in the total number of 
// friends a person has 
// and returns the number of imaginary friends they have.
// Since friends can only come in whole numbers, be sure to round your result 
// before returning it.

// const numImaginaryFriends = totalFriends => Math.round(totalFriends * .33)
// ====================================================
//  8            How Old
// ====================================================
// Write a function, howOld(), that has two number parameters, age and year, 
// and returns how old someone who is currently that age was (or will be) 
// during that year. Handle three different cases:
// If the year is in the future, you should return a string in the following format:
// 'You will be [calculated age] in the year [year passed in]'
// If the year is before they were born, you should return a string in the following format:
// 'The year [year passed in] was [calculated number of years] years before you were born'
// If the year is in the past but not before the the person was born, you should return a 
// string in the following format:
// 'You were [calculated age] in the year [year passed in]'

// const howOld = (age, year) => {
//     // The following two lines make it so that our function always knows the current year.
//         let dateToday = new Date();
//         let thisYear = dateToday.getFullYear();
//     // It is totally ok if your function used the current year directly!
      
//         const yearDifference = year - thisYear
//         const newAge = age + yearDifference
//         if (newAge < 0) {
//             return `The year ${year} was ${-newAge} years before you were born`
//         } else if (newAge > age) {
//             return `You will be ${newAge} in the year ${year}`
//         } else {
//             return `You were ${newAge} in the year ${year}`
//         }
// }
// ====================================================
//  9            What Relation
// ====================================================
// const whatRelation = percentSharedDNA => {
//     if (percentSharedDNA === 100) {
//         return 'You are likely identical twins.'
//     }
//     if (percentSharedDNA > 34) {
//         return 'You are likely parent and child or full siblings.'
//     }
//     if (percentSharedDNA > 13) {
//         return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
//     }
//     if (percentSharedDNA > 5) {
//         return 'You are likely 1st cousins.'
//     }
//     if (percentSharedDNA > 2) {
//         return 'You are likely 2nd cousins.'
//     }
//     if (percentSharedDNA > 0) {
//         return 'You are likely 3rd cousins'
//     }
//     if (percentShareDNA === 0){
//         return 'You are likely not related.'
//   }
// }
// console.log(whatRelation(34))
// console.log(whatRelation(3))
// ====================================================
//  10            Tip Calculator
// ====================================================
// Create a function, tipCalculator(), that has two parameters, a string representing 
// the quality of the service received and a number representing the total cost.
// Return the tip, as a number, based on the following:
// ‘bad’ should return a 5% tip
// ‘ok’ should return a 15% tip
// ‘good’ should return a 20% tip
// ‘excellent’ should return a 30% tip
// all other inputs should default to 18%

// function tipCalculator(quality, total) {
//     switch (quality) {
//       case 'bad':
//         return total * 0.05;
//         break;
//       case 'ok':
//         return total * 0.15;
//         break;
//       case 'good':
//         return total * 0.2;
//         break;
//       case 'excellent':
//         return total * 0.3;
//         break;
//       default:
//         return total * 0.18;
//         break;
//     }
// }
// ====================================================
//  11            Emoticon
// ====================================================
// Write a function, toEmoticon(), that 
// takes in a string and returns the corresponding emoticon as a string. 
// Use a switch/case, and cover these cases:
// 'shrug' should return '|_{"}_|'
// 'smiley face' should return ':)'
// 'frowny face' should return':('
// 'winky face' should return ';)'
// 'heart' should return '<3'
// any other input should return '|_(* ~ *)_|'

// const toEmoticon = emoticon => {
//     switch (emoticon) {
//       case 'shrug':
//         return '|_{"}_|';
//         break;
//       case 'smiley face':
//         return ':)';
//         break;
//       case 'frowny face':
//         return ':(';
//         break;
//       case 'winky face':
//         return ';)';
//         break;
//       case 'heart':
//         return '<3';
//         break;
//       default:
//         return '|_(* ~ *)_|';
//         break;
//     }
// }
  


