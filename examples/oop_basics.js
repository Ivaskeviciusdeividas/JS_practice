// OOP - Object Oriented Programming

// Intro to classes:

class Person {
    
    // Constructor:
    constructor(eye_color, height, age) {
        this._eyeColor = eye_color;
        this._height = height;
        this._age = age;
        this.createdAt = new Date()
    }

    // Methods:
    celebrateBirthday() {
        this.age += 1;
        console.log(`I am now ${this.age} years old`)
    }

    // Getters:
    get eyeColor() {
        return this._eyeColor.toUpperCase();
    }

    get age() {
        return this._age;
    }

    // Setter
    set eyeColor(newEyeColor) {
        if (newEyeColor === null || newEyeColor === undefined) {
            console.log("Bad value")
            return;
        }
        this._eyeColor = newEyeColor;
    }
}


const person = new Person("blue", "6'5", 22)
console.log("person1:")
console.log(person)

console.log("Celebrating bDay:")
person.celebrateBirthday()

console.log("Getter:")
console.log(person.eyeColor)

person.eyeColor = "blabla"


























