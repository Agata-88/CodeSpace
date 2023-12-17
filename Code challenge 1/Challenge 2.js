// function reversedArray (arr) {
//     return arr.reverse();
// }
// console.log(reversedArray([1,2,3,4,5]))

// //anonymous function
// let reversedArray = function (arr) {
//     return arr.reverse();
// }

let reversedArray = arr => arr.reverse();

//test with values as integers
console.log(reversedArray([1,2,3,4,5]))

//test with values as strings
console.log(reversedArray(["I", "love", "JavaScript"]))
