export default class Expense {
    constructor(name, cost) {
        this._name = name;
        this._cost = cost;
        this._paidAt = null;
    }

    // getters
    get name() {
        return this._name;
    }

    get cost() {
        return this._cost;
    }

    get paidAt() {
        return this._paidAt;
    }

    //setters
    set name(name) {
        this._name = name;
    }

    set cost(cost) {
        this._cost = cost;
    }

    set paidAt(paidAt) {
        this._paidAt = paidAt;
    }
}
