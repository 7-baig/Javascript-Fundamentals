// ************************************************
// ********************** LOOPS *********************
// ****************************************************

            // // WHILE LOOPS // //

// const cards = ['diamond', 'spade', 'heart', 'club'];

// let currentCard;
// while(currentCard != 'spade') {
//   currentCard = cards[Math.floor(Math.random() * 4)];
//   console.log(currentCard);
// }

            // // DO... WHILE LOOPS // //

// In some cases, you want a piece of code to run at least once and 
// then loop based on a specific condition after its initial run. This 
// is where the do...while statement comes in.
// A do...while statement says to do a task once and then keep doing it 
// until a specified condition is no longer met.

// const firstMessage = 'I will print!';
// const secondMessage = 'I will not print!'; 

// // A do while with a stopping condition that evaluates to false
// do {
//  console.log(firstMessage)
// } while (true === false);

// // A while loop with a stopping condition that evaluates to false
// while (true === false){
//   console.log(secondMessage)
// };

                // // BREAK // //

// const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// // Write you code below
// for (let i = 0; i < rapperArray.length; i++){
//   console.log(rapperArray[i]);
//   if (rapperArray[i] === 'Notorious B.I.G.'){
//     break;
//   }
// }
// console.log("And if you don't know, now you know.");




// function foo(x) {
//   if (x < 1) {
//     return "Less than one";
//   } else if (x < 2) {
//     return "Less than two";
//   } else {
//     return "Greater than or equal to two";
//   }
// }
// var res = foo(3);
// console.log(res);
// =======*********************************
// function prac(a, b) {
//   return a === b;
// }
// var result = prac(5, 5);
// console.log(result);

// function phoneticLookup(val) {
//   var result = "";
//   var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank",  
// }
// result = lookup[val];
// return result;
// }
// var hi = phoneticLookup("charlie");
// console.log(hi);
// ************************
// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh"
// };

// function checkObj(checkProp) {
//   var a = myObj.hasOwnProperty(checkProp);
//   return a;
// }

// console.log(checkObj("house"));
// checkObj("kitten");
// checkObj("house");

// *************************************
//  ***********************  OBJECTS **********************
//   var collection = {
//     2548: {
//       album: "Slippery When Wet",
//       artist: "Bon Jovi",
//       tracks: [
//         "Let It Rock",
//         "You Give Love a Bad Name"
//       ]
//     },
//     2468: {
//       album: "1999",
//       artist: "Prince",
//       tracks: [
//         "1999",
//         "Little Red Corvette"
//       ]
//     },
//     1245: {
//       artist: "Robert Palmer",
//       tracks: [ ]
//     },
//     5439: {
//       album: "ABBA Gold"
//     }
//   };
// function updateRecords(id, prop, value) {
//   if(value === "") {
//     delete collection[id][prop]
//   }
//   else if (prop === "tracks") {
//     collection[id][prop] = collection[id][prop] || [];
//     collection[id][prop].push(value)
//   }
//   else {
//     collection[id][prop] = value;
//   }
// }
// var res = updateRecords(2468, "tracks", "hello");
// console.log(res);

// ************** OBJECTS (MY VERSION) ****************

// var bio = {
//   name: "Saad",
//   age: 19,
//   nationality: "Pakistani",
//   "favourite food": "Biryani",
//   passion: "coding",
//   skills: [
//     "HTML",
//     "CSS",
//     "Javascript",
//     "Kuberenetes",
//     "Docker"
//   ],
//   vehicles: {
//     car: "Civic",
//     bike: "yamaha",
//     plane: "lufthansa"
//   }
// }
// var secondPlane = bio.vehicles["bike"];
// console.log(secondPlane);
// var push = bio.skills.push("React");
// console.log(bio);

// TABLE ***********

// var array = [];
// var i = 2;
// var j = 1
// while(i <= 20) {
//     array.push(2 + " x " + [j] + " = " + [i])
//     // array.push(2 + "x" + "2 = " +  [i] * 2);
//     i+=2; 
//     j++;   
// }
// console.log(array);
 
// ***********************************************
// NAMES *********************************
// var array = [];
// var names = ["saad", "ali", "baig", "rayyan", "uzair", "sameer", "saud", "saeed", "saadi"];
// var i = 0;
// while(i < 9) {
//     array.push("my name is " + names[i])
//     i++;
// }
// console.log(array);
 
// **&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&**
// TABLE WRAPPED IN FUNCTION // ***********************
// function table(number, second, answer) {
//     var array = [];
//     var i = answer;
//     var j = second;
//     var k = number;
//     while(i <= 50) {
//     array.push(k + " x " + [j] + " = " + [i])
//     // array.push(2 + "x" + "2 = " +  [i] * 2);
//     i+=6; 
//     j++;   
// }
// return array;
// }
// var result = table(6, 1, 6);
// console.log(result);

// var arr = [
//     [1,2], [3,4], [5,6]
//   ];
//   for (var i=0; i < arr.length; i++) {
//     for (var j=0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
// }

// var arr = [
//     [1, 2], [3, 4], [5, 6, 7]
// ]
//     var product = 1;
//     for (var i = 0; i < arr.length; i++) {
//       for (var j = 0; j < arr[i].length; j++) {
//         product = product * arr[i][j];
//       }
//     }
// console.log(product);

// var names = ["saad", "ali", "umar", "nabeel", "wasif", "zian", "rayyan", "taha"]
// var lastNames = ["baig", "mujahid", "meer", "farooq", "ahmed", "romasanta", "mirza", "ali"]
// var fullName = [];
// for (i = 0; i < names.length; i++) {
//   for (j = 0; j < lastNames.length; j++) {
//     fullName.push(names[i] + " " + lastNames[j])
//   }
// }
// console.log(fullName);

// var items = ["milk", "coke", "doritos"];

// // function priceGenerator(price) {
//   for (i = 0; i < items.length; i++) {
//     // items.push("price of " + items[i] + " is " + 10);
//   }
// // }
// // var result = priceGenerator(50);
// console.log(result);

// function multiply(arr, n) {
//     var product = arr[0];
//     for (var i = 1; i <= n; i++) {
//         product *= arr[i];
//     }
//     return product;
// }

// var result = multiply([5, 6, 7], 2);
// console.log(result);
// var array = ["hello", "hi", "bye"];
// function anxiety(case1) {
//   for (i = 0; i < 10; i++) {
//     if (case1 === array[i]) {
//       console.log('got it');
//       break;
//     }
//     else {
//       console.log('nothing');
//       break;
//     }
//   }
// };
// anxiety("hello");


// var shoppingList = ['doritos', 'dew', 'book', 'kfc']
// var updatedList = [];
// var total = prompt('What is your total?');
// var number = parseInt(total);
// if(number <= 10) {
//     shoppingList.push('cheese')
// }
// else if (number <= 15) {
//     shoppingList.push('butter')
// }
// else {
//     updatedList.push('nothing added')
// }
// console.log(updatedList);
// console.log(shoppingList);

// RANDOM GENERATOR =============================

// var list = [
//   "hello", "hi", "shut up", "go away", "nice", "cool"
// ]
// function func() {
//   var result = Math.floor(Math.random() * list.length);
//   var res = list[result];
//   console.log(res);
// }
// func();

/*
var a = "55";
var b = parseInt(a);
console.log(typeof(a));
console.log(typeof(b));
*/

// =========  TERNARY  OPERATOR =====================
// function ternary(a, b) {
//   return a === b ? "Equal" : "Not Equal";
// }
// ternary(5, 5);
// console.log(ternary(5, 5));

// =========== MULTIPLE TERNARY OPERATOR =================
// to be continuted....
// ================================================================
// Make a program that filters a list of strings and returns a list with 
// only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be 
// a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// function friend(){
//     let people = ["saad", "ali", "bob", "jack", "john", "tom",
//     "karl"]
//     let friends = [];
    
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].length === 4) {
//             friends.push(people[i]);
//         }
//     }
//     console.log(friends);
// }
// friend();
