export default
class Person {
    constructor (name, bankAccounts, expenses) {
        this._name = name;
        this._bankAccounts = bankAccounts;
        this._expenses = expenses;
        this._totalBalance;
        this._isBroke;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get bankAccounts() {
        return this._bankAccounts;
    }

    set bankAccounts(bankAccounts) {
        this._bankAccounts = bankAccounts;
    }

    get expenses() {
        return this._expenses;
    }

    set expenses(expenses) {
        this._expenses = expenses;
    }

    get totalBalance() {
        return this._totalBalance;
    }

    get isBroke() {
        return this._isBroke;
    }

    receiveSalary(salaryAmount) {
        for(acc in this._bankAccounts){
            if(acc.isMain === 1){
                acc._balance += acc.addFunds(salaryAmount);
            }
        }
    }

    addAccount(account) {
        const newAccount = new BankAccount(account._name, account._balance, account._isMain);
        for(acc of this.bankAccounts){
            if(acc._name !== newAccount && newAccount._isMain!==1){
                this.bankAccounts._isMain = 1;
                this.bankAccounts.push(newAccount);

            }
        }
    }

    transferFunds(accountGetName,accountName) {
        this.bankAccounts.accountGetName._balance += this.bankAccounts.accountName._balance;
        this.bankAccounts.accountName._balance = 0;
    }

    addExpense(name, cost) {
        const expense = new Expense(name, cost);
        this.expenses.push(expense);
    }
}