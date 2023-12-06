// //traditional function

// function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     } else {
//       counter++;
//     }
    
//     return counter;
//   }

// //anonymous function
// let counterFunc = function (counter) {
//     if (counter > 100) {
//         counter = 0;
//       } else {
//         counter++;
//       }
      
//       return counter;
// }

//arrow function
let counterFunc = counter => {
    if (counter > 100) {
        counter = 0;
      } 
      else {
        counter++;
      }
      
      return counter;
}

// Test with values less than 100
console.log(counterFunc(10));  // Output: 6
console.log(counterFunc(100)); // Output: 101

// Test with values greater than 100
console.log(counterFunc(101)); // Output: 0
