export default

class Rectangle {
    constructor(sideA, sideB) {
        this._sideA = sideA;
        this._sideB = sideB;
    }

    get sideA() {
        return this._sideA;
    }

    set sideA(sideA) {
        this._sideA = sideA;
    }

    get sideB() {
        return this._sideB;
    }

    set sideB(sideB) {
        this._sideB = sideB;
    }

    calculateArea() {
        return this._sideB * this._sideA;
    }

    calculatePerimeter() {
        return this._sideB * 2 + this._sideA * 2;
    }
}