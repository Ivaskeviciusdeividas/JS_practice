## Rich people

1. Create classes Person, BankAccount, Expense
    * The Person class should have fields (properties): name (string),
    bankAccounts (list of BankAccounts) and expenses (list of Expenses),
    totalBalance (number) (balance across all bankAccounts),
    isBroke (boolean) (true if total expense cost is more than total balance).
    NOTE! totalBalance and isBroke don't have to be declared straight away, having these just as getters is good.

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
        * transferFunds(accountFromName, accountToName, amout) - transfers amount of funds from one account to another
        * addExpense(name, cost) - creates and adds the expense to this person
        * coverExpense(expenseName, accountName) - pays the expense from funds of a specified account (if funds available)
        and updates the paidAt field
    * BankAccount:
        * addFunds(amount)
        * subtractFunds(amount) - cannot subtract more than is in balance for this account

3. Create a main.js file and import your classes
4. Create two Persons and save them to variables
5. Person1:
    * Add two accounts (1 of them main)
    * Receive salary: 1000
    * Transfer 400 to another account
    * Add 3 expenses (costs 500, 400, 400)
    * console.log the person's isBroke, totalBalance and totalExpenses: isBroke should be true, totalBalance should be correct,
   totalExpenses should be higher than totalBalance
  
6. Extra:
    * Write a function to pay expenses using money from all accounts. Expense is coverable only fully - no partial coverage.
    * Call this function and console.log the person's totalBalance, totalExpenses and isBroke.
    * Receive salary: 2000
    * Transfer 1000 to the second account
    * Call the expense paying function
    * console.log the person's isBroke, totalExpenses and totalBalance. isBroke should be false,
    account information and totalBalance correct

### Hints
1. You can write more getters to do what you want to do: if there is no totalExpenses field, you can write a
getter totalExpenses() and calculate them there.
2. You can write helper methods, such as getBankAccountByName(name) or getExpenseByName(name) in your Person class.
3. For expense paying function, you can write a helper method in the Person class, or a function in the main.js; up to you.
   Use loops.

To be continued!
