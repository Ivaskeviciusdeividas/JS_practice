export default class Customer {
    constructor(id, name, surname, age, wallet) {
        this._id = id
        this._name = name
        this._surname = surname
        this._age = age
        this._inventory = []
        this._wallet = wallet
        this._wishList = {}
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get surname() {
        return this._surname
    }

    get age() {
        return this._age
    }

    get wallet() {
        return this._wallet
    }

    get inventory() {
        return this._inventory
    }

    get wishList() {
        return this._wishList
    }

    set id(id) {
        this._id = id
    }

    set name(name) {
        this._name = name
    }

    set surname(surname) {
        this._surname = surname
    }

    set age(age) {
        return this._age = age
    }

    set wallet(wallet) {
        this._wallet = wallet
    }

    set inventory(inventory) {
        this._inventory = inventory
    }

    set wishList(wishList) {
        this._wishList = wishList
    }

    addItem(itemToAdd) {
        const item = this.getItemByName(itemToAdd.name)
        if (item !== null) {
            item.quantity += 1
            return
        }
        this.inventory.push(itemToAdd)
    }

    getItemByName(itemName) {
        for (let item of this.inventory) {
            if (item.name === itemName) {
                return item
            }
        }
        return null
    }
}
