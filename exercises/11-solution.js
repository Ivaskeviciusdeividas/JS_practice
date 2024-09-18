// Using this object:

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2011,
    color: "blue"
}


// 2.1. Using a for-in loop, console.log all of this object's property names:
// Solution here:
console.log("2.1:")
for (prop in car) {
    console.log(prop)
}


// 2.2. Now, using for-in loop, print out property values:
// Solution here:
console.log("2.2:")
for (prop in car) {
    console.log(car[prop])
}


/*
Explanation: use a for-in loop to loop through objects. 
Remember, that an object's property can be reached by, either:
(1) obj["propertyName"] or (2) obj.propertyName

In our 2.2 example, we essentially use the first approach
However, the 2nd approach is preferred when we need to access a property value
in general
*/
