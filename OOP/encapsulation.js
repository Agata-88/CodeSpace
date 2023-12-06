//Class Circle
class Circle {
    //Class contructor. _radius is now a private property/variable
    constructor (radius){
        this._radius = radius
    }

    //Getters
    get radius(){
        return this._radius;
    }
    //Setters
    set radius(radius){
        this._radius = radius;
    }
    //Methods
    calculateArea(){
        return Math.PI * this._radius **2;
    }
}

//create car object
const circle = new Circle(5);
//console.log(circle.radius);
//calling the get method
console.log("Radius: ", circle.radius);
console.log("Area: ", circle.calculateArea());

// Set a new radius using the set method
circle.radius = 7;
console.log("Radius: ", circle.radius);
console.log("Area: ", circle.calculateArea());

