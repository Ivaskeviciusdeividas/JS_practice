import Expense from "./Expense.js"


export default class Person {
    constructor (name, bankAccounts, expenses) {
        this._name = name;
        this._bankAccounts = bankAccounts;
        this._expenses = expenses;
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
        let sumBalance = 0;
        this.bankAccounts.forEach(acc => {
            sumBalance += acc.balance;
        })
        return sumBalance;
    }

    totalExpense() {
        let sumExpense = 0;
        this.expenses.forEach(exp => {
            sumExpense += exp.cost;
        })
        return sumExpense;
    }

    get isBroke() {

        return this._isBroke;
    }

    receiveSalary(salaryAmount) {
        for(let acc of this.bankAccounts){
            if(acc.isMain){
                acc.addFunds(salaryAmount);
                
            }
        }
    }

    addAccount(account) { 
        if( !account.isMain && this.bankAccounts.length === 0){ 
            account.isMain = true;
        }
        for(let acc of this.bankAccounts) {
            if(acc.name === account.name) { 
                
                throw new Error("Bad account name")
             }
            if(acc.isMain && account.isMain) {
                throw new Error("Main account already exists");
            }        
        }
        this.bankAccounts.push(account);
    }

    transferFunds(accountGetName,accountName,amount) {
        const acc1 = this.getBankAccountByName(accountGetName);
        const acc2 = this.getBankAccountByName(accountName);
        acc2.subtractFunds(amount);
        acc1.addFunds(amount);
    }

    getBankAccountByName(name) {
        for(let acc of this.bankAccounts) {
            if(acc.name === name) {
                return acc;
            }  
        }
        throw new Error("no matching name account found");
    }

    getExpenseByName(name) {
        for(let exp of this.expenses) {
            if(exp.name === name) {
                return exp;
            }  
        }
        throw new Error("no matching name expense found");
    }

    addExpense(name, cost) {
        const expense = new Expense(name, cost);
        this.expenses.push(expense);
    }

    coverExpense(expenseName, accountName) {
        //console.log(this.getBankAccountByName(accountName).balance);
        const selectExp = this.getExpenseByName(expenseName);
        const selectAcc = this.getBankAccountByName(accountName);
        if(selectExp.cost <= selectAcc.balance) {
            selectAcc.subtractFunds(selectExp.cost);
            selectExp.paidAt = new Date(); 
            console.log(`expense: ${selectExp.name} paid succesfully, amount: ${selectExp.cost}`)  
        }
        else throw new Error("insufficient funds to pay");
    }

    payExpenses(){
        for( let exp of this.expenses){
            for(let acc of this.bankAccounts) {
                if(exp.cost <= acc.balance && !exp.paidAt){
                    this.coverExpense(exp.name, acc.name);
                }
            }
        }
        
    }
}