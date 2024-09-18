/*
 1.1. Create an object that represents a car. It should have properties like
 make, model, year, and color.
 Then, access and display these properties in the console.

*/

console.log("1.1:")
// Post your solution below:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2011,
    color: "blue"
}

console.log(car["make"])
console.log(car["model"])
console.log(car["year"])
console.log(car["color"])
// Or:

console.log(car.make)
console.log(car.model)
console.log(car.year)
console.log(car.color)

// 1.2. Once you have your object, assign other values:
// country (string), maxSpeed (integer), numberOfSeats (integer)
// After assigning, print out the whole object

console.log("1.2:")
// Solution:
car.country = "Japan"
car.maxSpeed = 220
car.numberOfSeats = 4

console.log(car)


// 1.3. Try to reassign the maxSpeed and country properties and print out the whole object

console.log("1.3:")
// Solution:
car.maxSpeed = 260
car.country = "Canada"

console.log(car)

// 1.4. Create a property 'start' and assign a function start() to it 
// Write that function separately. Inside it, print out that the car has started

console.log("1.4:")
// Solution. Assign:
car.start = start // Notice that we are not writing start() here. Writing start()
// would call the function and assign the returned value (in this case - undefined,
// as our start function does not return anything


// Then, write function definition:
function start() {
    console.log("car started...")
}


// Now, call the function from the object:
car.start()


// 1.5 Now, delete a property from an object:

console.log("1.5")
// Solution:
delete car.maxSpeed

// Print out the whole object:
console.log(car)


// Notice the assignment to start - it is a function object that was assigned

