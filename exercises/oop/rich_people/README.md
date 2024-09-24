## Rich people

1. Create classes Person, BankAccount, Expense
    * The Person class should have fields (properties): name (string), receiveSalary
    (number), bankAccounts (list of BankAccounts) and expenses (list of Expenses),
    totalBalance (number) (balance across all bankAccounts),
    isBroke (boolean) (true if total expense cost is more than total balance)

    * The BankAccount class should have fields name (string), balance (number), 
    isMain (boolean)

    * The Expense class should have fields name (string), cost (number), paidAt (date)
    (if the expense hasn't been paid yet, this field should be left null or undefined)
<br/>
Encapsulate all fields with getters and setters <br/>

2. Create methods for classes:
    * Person:
        * receiveSalary(salaryAmount) - should get salary into his main account,
        * addAccount(account) - adds another bank account to this person. Cannot have more than 1 main account,
        each bank account's name must be unique for this person
        * transferFunds(accountName) - transfer available funds from one account to another
        * addExpense(name, cost) - creates and adds the expense to this person
    * BankAccount:
        * addFunds(amount)
        * subtractFunds(amount) - cannot subtract more than is in balance for this account
    * Expense:
        * cover(accountName) - pays the expense from funds of a specified account (if funds available)
        and updates the paidAt field

3. Create a main.js file and import your classes
4. Create two Persons and save them to variables
5. P1:
    * Add two accounts (1 of them main)
    * Receive salary: 1000
    * Transfer 400 to another account
    * Add 3 expenses (costs 500, 400, 400)
    * Write a function to cover expenses
    * console.log the person
    * One expense be left unpaid, isBroke should be true, totalBalance should reflect how much money the person has
    left after covering what he could
    * Receive salary: 2000
    * Transfer 1000 to the second account
    * Call the expense paying function again
    * console.log the person. isBroke should be false, account information and totalBalance correct

To be continued!
