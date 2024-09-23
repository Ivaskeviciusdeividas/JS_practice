export default class Circle {
    static PI = 3.14; // don't worry if you didn't write this. Static variables
    // will be covered. For now, know that these variables belong to the class itself,
    // not for its instances (objects created with the class)
    
    constructor(radius) {
        this._radius = radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    calculateArea() {
        return Circle.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Circle.PI * this.radius;
    }
}

