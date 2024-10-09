import Expense from './Expense.js'

export default class Person {
    constructor(name) {
        this._name = name;
        this._bankAccounts = [];
        this._expenses = []
    }

    // getters
    get name() {
        return this._name;
    }

    get bankAccounts() {
        return this._bankAccounts;
    }

    get expenses() {
        return this._expenses;
    }

    get totalBalance() {
        let total = 0;
        for (let acc of this.bankAccounts) {
            total += acc.balance;
        }
        return total;
    }

    get isBroke() {
        let totalExpenses = 0;
        for (let expense of this.expenses) {
            if (!expense.paidAt) {
                totalExpenses += expense.cost;
            }
        }
        return this.totalBalance < totalExpenses;
    }


    // setters
    set name(name) {
        this._name = name;
    }

    set bankAccounts(bankAccounts) {
        this._bankAccounts = bankAccounts;
    }

    set expenses(expenses) {
        this._expenses = expenses;
    }


    // methods:
    receiveSalary(amount) {
        const mainAccount = this.getMainAccount()
        mainAccount.addFunds(amount);
    }

    addAccount(account) {
        this.bankAccounts.push(account);
    }

    transferFunds(accountFromName, accountToName, amount) {
        const accountFrom = this.getAccountByName(accountFromName);
        const accountTo = this.getAccountByName(accountToName);

        accountFrom.subtractFunds(amount);
        accountTo.addFunds(amount);
    }

    addExpense(name, cost) {
        this.expenses.push(new Expense(name, cost));
    }

    coverExpense(expenseName, accountName) {
        const expense = this.getExpenseByName(expenseName);
        const account = this.getAccountByName(accountName);

        if (account.balance >= expense.cost) {
            // Early return if the expense is already covered - to not execute the
            // code block below
            if (expense.paidAt) {
                console.log(`Expense ${expense.name} is already covered`);
                return
            }
            expense.paidAt = new Date();
            account.subtractFunds(expense.cost);
            console.log(`Expense '${expenseName}' covered`);
            console.log(`Remaining balance in account '${accountName}' is ${account.balance}`);
        }
    }

    getAccountByName(name) {
        for (let acc of this.bankAccounts) {
            if (acc.name === name) {
                return acc;
            }
        }
        throw new Error(`No account exists with name ${name}`)
    }

    getMainAccount() {
        for (let acc of this.bankAccounts) {
            if (acc.isMain) {
                return acc;
            }
        }
        throw new Error("No main account created!")
    }

    getExpenseByName(name) {
        for (let expense of this.expenses) {
            if (expense.name === name) {
                return expense;
            }
        }
        throw new Error(`No expense exists with name ${name}`)
    }
}

