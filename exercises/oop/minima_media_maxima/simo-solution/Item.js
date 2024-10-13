export default class Item {
    constructor(id, name, price, quantity, category, shopName) {
        this._id = parseInt(id)
        this._name = name
        this._price = parseFloat(price)
        this._quantity = parseInt(quantity)
        this._category = category
        this._shopName = shopName
        this._ageRestricted = false
    }

    // setters/getters
    get id() {
        return this._id
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price
    }

    get quantity() {
        return this._quantity
    }

    get category() {
        return this._category
    }

    get shopName() {
        return this._shopName
    }

    get ageRestricted() {
        return this._ageRestricted
    }

    set id(id) {
        this._id = id
    }

    set name(name) {
        this._name = name;
    }

    set price(price) {
        this._price = price
    }

    set quantity(quantity) {
        this._quantity = quantity
    }

    set category(category) {
        this._category = category
    }

    set shopName(shopName) {
        this._shopName = shopName
    }

    set ageRestricted(ageRestricted) {
        this._ageRestricted = ageRestricted
    }
}
