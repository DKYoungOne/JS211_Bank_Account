class Transaction {
    constructor(amount, payee) {
      this.amount = amount;
      this.payee = payee;
      this.date = new Date().toDateString();
  
    }
  }
  
  class BankAccount {
    constructor(accountNumber, owner) {
      this.transactions = [];
      this.accountNumber = accountNumber;
      this.owner = owner;
    }
  
    balance() {
      let totalBalance = 0;
      for (let i = 0; i < this.transactions.length; i++) {
        totalBalance += this.transactions[i].amount;
      }
      return totalBalance;
    }
    deposit(amt) {
      if (amt > 0) {
        this.transactions.push(new Transaction(amt));
      }
    }
    charge(amt, payee) {
      if (this.balance()-amt > 0 ) {
        this.transactions.push(new Transaction(-amt, payee))
      } else { return "You cannot charge this account, this transaction would make user balance less than zero." }
    }
  }
  
