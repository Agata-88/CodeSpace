// function reverseString(name) {
//     //splits string into array
//     let nameString = name.split("");

//     //reverse the array
//     let reversedArray = nameString.reverse();

//     //join the characters from the array together, now that those are reversed
//     let reverseString = reversedArray.join("");

//     return reverseString;
// }

// //test 
// console.log(reverseString("Agata"));

// let reverseString = name => {
//     //splits string into array
//     let nameString = name.split("");

//     //reverse the array
//     let reversedArray = nameString.reverse();

//     //join the characters from the reversedArray together, now that those are reversed.
//     let reverseString = reversedArray.join("");

//     return reverseString;
// }

let reverseString = name => name.split("").reverse().join("");

//test 
console.log(reverseString("Agata"));
