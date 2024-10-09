export default class BankAccount {
    constructor(name, isMain) {
        this._name = name;
        this._balance = 0;
        this._isMain = isMain;
    }

    // getters
    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    get isMain() {
        return this._isMain;
    }


    // setters
    set name(name) {
        this._name = name;
    }

    set balance(balance) {
        this._balance = balance;
    }

    set isMain(isMain) {
        this._isMain = isMain;
    }

    // methods
    addFunds(amount) {
        console.log(`Added ${amount} to '${this.name}' account`)
        this.balance = this.balance + amount;
    }

    subtractFunds(amount) {
        const newBalance = this.balance - amount;
        if (newBalance < 0) {
            throw new Error("Insufficient funds");
        }
        console.log(`Subtracted ${amount} from '${this.name}' account`)
        this.balance = newBalance; 
    }
}
