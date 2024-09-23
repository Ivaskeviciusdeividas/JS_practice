export default class Square {

    constructor(side) {
        this._side = side;
    }

    set side(side) {
        this._side = side;
    }

    get side() {
        return this._side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    calculatePerimeter() {
        return this.side * 4;
    }
}
