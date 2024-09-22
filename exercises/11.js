
// Using this object:

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2011,
    color: "blue"
}


// Using a for-in loop, console.log all of this object's property names:
// Solution here:
for(key in car){
    console.log(key);
}



// Now, using for-in loop, print out property values:
// Solution here:
for(key in car){
    console.log(car[key]); 
}


