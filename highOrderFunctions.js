// // // // //      FUNCTIONS AS DATA    // // // // //
// we can assign functions to variables, and we can reassign them to new variables.

// const announceThatIAmDoingImportantWork = () => {
//     console.log("I’m doing very important work!");
// };
// const busy = announceThatIAmDoingImportantWork;

// busy(); // This function call barely takes any space

// Hmmm, if we forgot the original name of our function, 
// is there a way we could figure it out? 
// Use busy to console.log() the name property of the function we assigned to is2p2.
// console.log(busy.name)

// // // // //      FUNCTIONS AS PARAMETERS    // // // // //
// A higher-order function is a function that either accepts functions as parameters, 
// returns a function, or both! We call the functions that get passed in as parameters 
// and invoked "callback functions" because they get called during the execution of the 
// higher-order function.
// 
//
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for(let i = 1; i <= 1000000; i++) {
//       if ( (2 + 2) != 4) {
//         console.log('Something has gone very wrong :( ');
//       }
//     }
//   };
  
//   const addTwo = num => num + 2;
  
//   const timeFuncRuntime = funcParameter => {
//     let t1 = Date.now();
//     funcParameter();
//     let t2 = Date.now();
//     return t2 - t1;
//   };
  
//   // Write your code below
//   const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
//   const checkConsistentOutput = (func, val) => {
//     let firstTry = func(val);
//     let secondTry = func(val);
//     if(firstTry === secondTry) {
//       return firstTry;
//     }
//     else {
//       return 'This function returned inconsistent results'
//     }
//   }
//   checkConsistentOutput(addTwo, 3);


