class User {
    //Class constructor
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    //Getter method to retrieve fistName
    get firstName(){
        return this._firstName;
    }
    //Setter method to set a new value to the firstName
    set firstName(firstName){
        this._firstName = firstName;
    }
    //Getter method to retrieve lastName
    get lastName(){
        return this._lastName;
    }
    //setter method to set a new value to the lastName
    set lastName(lastName){
        this._lastName = lastName;
    }

    //hello() method
    hello() {
        return "Hello World";
    }
}

//Creating object (instance) of the class User
const user = new User("John", "Doe");

// Call hello() method
console.log (user.hello());

//Show user's first and last name (using get method
console.log(`My name is ${user.firstName} ${user.lastName}`);

//Set user's new firstName and new lastName
user.firstName = "Jane";
user.lastName = "Doe";

console.log (user.hello());

//Show user's new first and last name (using get method)
console.log(`My name is ${user.firstName} ${user.lastName}`);

