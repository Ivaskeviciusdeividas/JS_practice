export default
class Expense {
    constructor (name, cost) {
        this._name = name;
        this._cost = cost;
        this._paidAt = null;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get cost() {
        return this._cost;
    }

    set cost(cost) {
        this._cost = cost;
    }

    get paidAt() {
        return this._paidAt;
    }

    cover(accountName){
        if(accountName.funds > this._cost) {
            this._paidAt = new Date();
        }
        else{
        throw Error("not enough funds");
        }
    }
}