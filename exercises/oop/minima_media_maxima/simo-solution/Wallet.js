export default class Wallet {
    constructor(cashBalance, cardBalance) {
        this._cash = cashBalance
        this._card = cardBalance
    }

    get cash() {
        return this._cash
    }

    get card() {
        return this._card
    }

    get totalBalance() {
        return this.cash + this.card
    }

    set cash(cashBalance) {
        this._cash = cashBalance
    }

    set card(cardBalance) {
        this._card = cardBalance
    }

    pay(amount, cardAllowed) {
        if (this.totalBalance < amount) {
            throw new Error(`Unable to buy item for ${amount} with total balance of` 
                + ` ${this.totalBalance}`)
        }

        if (!cardAllowed) {
            console.log("Card is not allowed, paying cash...")
            const remainder = this.payCashAndReturnRemainingItemPrice(amount)

            if (remainder === 0) {
                console.log("Item bought successfully")
            }
            return
        }

        let remainder = this.payCashAndReturnRemainingItemPrice(amount)

        if (remainder === 0) {
            console.log("Item bought successfully")
            return
        }

        remainder = this.payCardAndReturnRemainingItemPrice(remainder)

        if (remainder === 0) {
            console.log("Item bought successfully")
            return
        }

        console.log("Unable to buy item. Out of cash and card balance")
        console.log(`Remaining price to pay: ${remainder}`)
    }

    payCashAndReturnRemainingItemPrice(amount) {
        if (amount <= this.cash) {
            this.cash = this.cash - amount
            console.log(`Paid full amount ${amount} in cash`)
            return 0
        }
        console.log(`Not enough cash to pay the full amount ${amount}`)
        this.cash = 0
        return amount - this.cash
    }

    payCardAndReturnRemainingItemPrice(amount) {
        if (amount <= this.card) {
            this.card = this.card - amount
            console.log(`Paid full amount ${amount} by card`)
            return 0
        }
        console.log(`Not enough card balance to pay the full amount ${amount}`)
        this.card = 0
        return amount - this.card
    }
}
