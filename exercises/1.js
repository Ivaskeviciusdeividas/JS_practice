/*
 1.1. Create an object that represents a car and assign it to a variable.
 It should have properties like make, model, year, and color.
 Then, access and display these properties in the console.
*/

console.log("1.1:")
// Post your solution below:
const car = {
    make : "audi",
    model : 100,
    year : 1988,
    color: "blue",
};

for( const [key, value] of Object.entries(car)){
    console.log(`${key} : ${value}`);
}
// 1.2. Once you have your object, assign other values:
// country (string), maxSpeed (integer), numberOfSeats (integer)
// After assigning, print out the whole object

console.log("1.2:")
// Solution:
car.country = "Germany";
car.maxSpeed = 186;
car.numberOfSeats = 5;

for( const [key, value] of Object.entries(car)){
    console.log(`${key} : ${value}`);
}

// 1.3. Reassign the maxSpeed and country properties and print out the whole object

console.log("1.3:")
// Solution:

car.maxSpeed = 165;
car.country = "China";

for( const [key, value] of Object.entries(car)){
    console.log(`${key} : ${value}`);
}
// 1.4. Create a property 'start' and assign a function start() to it 
// Write that function separately. Inside it, print out that the car has started

console.log("1.4:")
// Solution. Assign:
car.start = start;

// Then, write function definition:
function start(){
    console.log("car has started");
}

// Now, call the function from the object:
car.start();

// 1.5 Now, delete a property from an object:
console.log("1.5")
// Solution:
delete car.numberOfSeats;


// Print out the whole object:
for( const [key, value] of Object.entries(car)){
    if(typeof value === "function"){
        car.start();
    }else{
    console.log(`${key} : ${value}`);
    }
}

