class User {
    constructor(username){
    // Check if an attempt is made to instantiate the abstract class directly
    if (this.constructor === User) {
        throw new TypeError("Cannot construct Abstract instances directly.");
      }
    this._username = username;
    }  
   
    //Abstract method for role - to be implemented by subclasses
    stateYourRole(){
    };

    //Getter method to retrieve username
    get username(){
        return this._username;
    }

    //Setter to set new value to username
    set username(newUsername){
        this.username = newUsername;
    }
}
//Extend the User class to crete a subclass called Admin
class Admin extends User {
    constructor(){
    super();
    }
    stateYourRole(){
        return ("admin"); 
    }
}

//Extend the User class to crete a subclass called Viewer
class Viewer extends User {
    constructor(){
        super();
    }
        stateYourRole(){
            return ("viewer"); 
    }
}

const admin = new Admin ("Balthazar");
console.log(admin.stateYourRole()); //output admin

const viewer = new Viewer ("Melchior");
console.log(viewer.stateYourRole()) //output viewer