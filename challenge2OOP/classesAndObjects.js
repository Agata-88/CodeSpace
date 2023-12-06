class User{
    //Class constructor
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //hello() method
    hello(){
        console.log (`hello, ${this.firstName} ${this.lastName}`);
    }
}
//Creating object (instance) of the User class
const user1 = new User("John", "Doe");
user1.hello()

//Get the user's first and last name
const user2 = new User("Jane", "Doe");
user2.hello()


