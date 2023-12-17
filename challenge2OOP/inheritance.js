class User {
    //Class constructor
    constructor(){
        //Initialise the userName
        this._userName = "";
    }

//Setters
set userName(userName) {
    this._userName = userName;
    }
}

//Admin class
class Admin extends User {
    //Class constructor
    constructor(){
        super();
    }

    //ExpressYourRole() method
    explressYourRole() {
        return "Admin";
    }

    
    //sayHello()method
    sayHello(){
        return `Hello admin, ${this._userName}`;
    }
}
    //create object () of the class Admin
    let admin = new Admin();

    //Set user name to "Balthazar"
    admin.userName = "Balthazar";

    //Show info to the user
    console.log(admin.sayHello());

