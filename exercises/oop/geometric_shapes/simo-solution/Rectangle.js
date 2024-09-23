export default class Rectangle {
    constructor(xLength, yLength) {
        this._xLength = xLength;
        this._yLength = yLength;
    }

    set xLength(xLength) {
        this._xLength = xLength;
    }

    get xLength() {
        return this._xLength;
    }

    set yLength(yLength) {
        this._yLength = yLength;
    }

    get yLength() {
        return this._yLength;
    }

    calculateArea() {
        return this.xLength * this.yLength;
    }

    calculatePerimeter() {
        return this.xLength * 2 + this.yLength * 2;
    }
}
