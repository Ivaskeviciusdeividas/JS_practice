import Person from './Person.js'
import BankAccount from './BankAccount.js'

const p1 = new Person("John");
const p2 = new Person("Peter");


p1.addAccount(new BankAccount("swedbank", true));
p1.addAccount(new BankAccount("seb", false));

p1.receiveSalary(1000);
p1.transferFunds("swedbank", "seb", 400);

p1.addExpense("rent", 500);
p1.addExpense("food", 400);
p1.addExpense("playstation5", 400);


function payExpenses(person) {
    for (let acc of person.bankAccounts) {
        for (let expense of person.expenses) {
            if (acc.balance >= expense.cost && !expense.paidAt) {
                person.coverExpense(expense.name, acc.name);
            }
        }
    }
}

console.log("P1:")
console.log("Before paying...")
console.log(`isBroke: ${p1.isBroke}, totalBalance: ${p1.totalBalance}`)

payExpenses(p1)

console.log("After paying...")
console.log(`isBroke: ${p1.isBroke}, totalBalance: ${p1.totalBalance}`)


