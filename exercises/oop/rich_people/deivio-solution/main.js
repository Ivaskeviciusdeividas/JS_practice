import Expense from "./Expense.js";
import BankAccount from "./BankAccount.js";
import Person from "./Person.js";

const person1 = new Person("bob", [], []);
const person2 = new Person("john", [], []);

person1.addAccount(new BankAccount("1",0,true));
person1.addAccount(new BankAccount("2",0,false));
person1.receiveSalary(1000);
person1.transferFunds("2", "1", 400);
person1.addExpense("house", 500);
person1.addExpense("dog", 400);
person1.addExpense("wife", 400);



console.log(person1);
console.log(person1.totalBalance);
console.log(person1.totalExpense());
person1.payExpenses();
console.log(person1);

console.log(person1.totalBalance);