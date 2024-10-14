/*

Que-8:- unction Constructor: How do you create an object using a 
function constructor? Provide an example of a constructor function 
called Car that initializes make and model properties.

*/


function Car(make, model) {
    this.make = make;   
    this.model = model; 
}


const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');


console.log(car1); 
console.log(car2); 
