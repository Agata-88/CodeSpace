// //traditional function

// function nameAge(name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }

// //anonymous function

// let nameAge = function (name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
// }

let nameAge = (name,age) => {
    console.log("Hello " + name + ".");
    console.log("You are " + age + " years old.");
}

nameAge("John", "50");