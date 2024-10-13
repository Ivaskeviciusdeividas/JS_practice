import Item from './Item.js'

export default class Shop {
    constructor(name, cashOnly) {
        this._name = name
        this._items = []
        this._cashOnly = cashOnly
    }


    get name() {
        return this._name
    }

    get items() {
        return this._items
    }

    get cashOnly() {
        return this._cashOnly
    }

    set name(name) {
        this._name = name
    }

    set items(items) {
        this._items = items
    }

    set cashOnly(cashOnly) {
        this._cashOnly = cashOnly
    }

    //methods
    applyDiscount(category, discountFraction) {
        for (let item of this.items) {
            if (item.category === category) {
                item.price = item.price * discountFraction // 0.8, 0.6, etc.
            }
        }
    }

    sell(itemName, age) {
        const item = this.getItemByName(itemName)
        if (item.ageRestricted && age < 18) {
            throw new Error(`Item ${itemName} is only allowed to buy for grown-ups`)
        }

        if (item.quantity === 0) {
            throw new Error(`Item ${itemName} is sold out!`)
        }
        item.quantity -= 1
        return new Item(item.id, item.name, item.price, 1, item.category,
            item.shopName)
    }

    sortByPrice() {
        this.items.sort((a, b) => {
            return a.price - b.price
        })
    }

    getItemByName(name) {
        for (let item of this.items) {
            if (item.name === name) {
                return item
            }
        }
        throw new Error(`Item ${name} not found in shop's inventory`)
    }
}
