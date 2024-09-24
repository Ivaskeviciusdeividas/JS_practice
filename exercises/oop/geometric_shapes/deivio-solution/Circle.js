export default

 class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    calculateArea() {
        return this._radius * this._radius * 3.14;
    }

    calculatePerimeter() {
        return 2 * this.radius * 3.14;
    }
}