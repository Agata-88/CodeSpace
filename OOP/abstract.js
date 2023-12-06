// Bank account class

class BankAccount{
    //constructor
    constructor(balance){
        this.balance = balance;
    }

    //Abstract methods - method that we need to pass to child classes. Superclass should not be changed.
    deposit(amount){}

    withdraw(amount){}

    // Create normal/concrete method
    calculateInterestRate(){
        console.log("The interest rate is 5%");
    }

}
    // Create concrete class/subclass/child class representing savings account
    class SavingsAccount extends BankAccount {
        //class constructor
        constructor (balance, interestRate) {
            //call the super class(parent) contructor
            super(balance);
            this.interestRate = interestRate;
        }

        //Implementing the deposit method for SavingsAccount from the super class
        deposit(amount){
        // calculate the interest and update the balance
        this.balance +=amount +(amount * this.interestRate) / 100;
        }

        withdraw(amount){
        //Check if there are sufficient funds for withdrawal
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            //show error message to user
            console.log("Insufficient funds.");
        }
    }
}

    //create a savings account object
    const savingsAccount = new SavingsAccount(1000, 5);
    console.log(savingsAccount.balance)

    //Deposit funds
    savingsAccount.deposit(500);