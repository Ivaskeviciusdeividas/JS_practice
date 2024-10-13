import { readFileAndMapItems } from "./FileReader.js"
import Shop from './Shop.js'
import Item from './Item.js'
import Bank from './Bank.js'
import Customer from './Customer.js'
import Wallet from './Wallet.js'


const filePath = "../items.csv"

const items = await readFileAndMapItems(filePath);

const bank = new Bank()

const minima = new Shop('MINIMA', true)
const media = new Shop('MEDIA', false)
const maxima = new Shop('MAXIMA', false)

const shops = [minima, media, maxima]

putItemsToRespectiveShops(items, shops)

// customers
const c1 = new Customer(1, 'Jonas', 'Jonainits', 22, new Wallet(20, 15.5))
const c2 = new Customer(2, 'Agnė', 'Agnaitė', 16, new Wallet(10, 25.3))
const c3 = new Customer(3, 'Saulės', 'Dievas', 30, new Wallet(1.4, 0))

c1.wishList = {
    "Gourmet Cheese": 1,
    "Water Bottle": 2,
    "Shampoo": 1,
    "Organic Tea": 1, 
    "Bread": 1
}

c2.wishList = {
    "Wine": 1,
    "Pizza": 1,
    "Soap": 1,
    "Face Cream": 1
}

c3.wishList = {
    "Bread": 1,
    "Water Bottle": 1
}

// convert money
exchangeAllMoneyForCustomer(c1, bank)
exchangeAllMoneyForCustomer(c2, bank)
exchangeAllMoneyForCustomer(c3, bank)

buyItems(c1, shops)
buyItems(c2, shops)

minima.applyDiscount("drinks", 0.5)

buyItems(c3, shops)

function exchangeAllMoneyForCustomer(customer, bank) {
    try {
        customer.wallet.card = bank.exchange(customer.wallet.card)
    } catch (e) {
        // ignore
    }
    try {
        customer.wallet.cash = bank.exchange(customer.wallet.cash)
    } catch (e) {
        // ignore
    }
}

function buyItems(customer, shops) {
    const wishList = customer.wishList

    for (let shop of shops) {
        for (let wantedItem in wishList) {
           try {
                let quantity = wishList[wantedItem]

                while (quantity > 0) {
                    console.log(`Buying item ${wantedItem} in ${shop.name}`)
                    const itemToBuy = shop.getItemByName(wantedItem)
                    customer.wallet.pay(itemToBuy.price, !shop.cashOnly)
                    const boughtItem = shop.sell(wantedItem, customer.age)

                    customer.addItem(boughtItem)
                    console.log(`Successfully bought item ${wantedItem} in ${shop.name}`)
                    quantity -= 1
                }
            } catch (e) {
                console.log(`Could not buy item ${wantedItem} in ${shop.name}`)
            }
        }
    }
}

function putItemsToRespectiveShops(items, shops) {
    for (let item of items) {
        for (let shop of shops) {
             if (item.shopName === shop.name) {
                shop.items.push(item)
            }
        }
    }
}

