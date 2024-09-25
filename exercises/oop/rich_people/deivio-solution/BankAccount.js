export default
class BankAccount {
    constructor (name, balance, isMain) {
        this._name = name;
        this._balance = balance;
        this._isMain = isMain;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get balance() {
        return this._balance;
    }

    set balance(balance) {
        this._balance = balance;
    }

    get isMain() {
        return this._isMain;
    }

    set isMain(isMain) {
        this._isMain = isMain;
    }

    addFunds(amount) {
        this._balance += amount;
    }

    subtractFunds(amount) {
        if(amount < this._balance) {
            this._balance -= amount;
        }
        else {
            throw Error("cannot subtract more than is in balance for this account");
        }
    }
}