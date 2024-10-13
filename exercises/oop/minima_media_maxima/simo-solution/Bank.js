export default class Bank {
    constructor() {
        this._exchangeRate = 3.45
        this._fee = 3
    }

    get exchangeRate() {
        return this._exchangeRate
    }

    get fee() {
        return this._fee
    }

    exchange(amount) {
        const converted = amount * this.exchangeRate
        if (converted > this.fee) {
            return converted - this.fee
        }
        throw new Error(`Tau neužtenka šaibų pasikeisti ${amount} eurus į litus`)
    }
}
