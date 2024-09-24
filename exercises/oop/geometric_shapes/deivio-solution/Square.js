export default

class Square{
    constructor(Side) {
        this._side = Side;
    }

    get side() {
        return this._side;
    }

    set side(Side) {
        this._side = Side;
    }

    calculateArea() {
        return this._side *this._side;
    }

    calculatePerimeter() {
        return this._side * 4;
    }
}