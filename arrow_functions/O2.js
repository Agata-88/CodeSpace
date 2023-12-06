// //traditional function
// function isEven(num) {
//     return num % 2 === 0;
// }

// //traditional anonymus function
// let isEven = function (num) {
//     return num % 2 === 0;
// }
 //arrow function
 let isEven = num => num % 2 === 0;

 //Test with even numbers
 console.log (isEven(8)) // output: true

 //Test with odd numnbers
 console.log(isEven(7)) // output: false