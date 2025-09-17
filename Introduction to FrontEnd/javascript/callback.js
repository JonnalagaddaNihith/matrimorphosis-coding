class ATM {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  withDraw(amount) {
    return new Promise((reject, resolve) => {
      if (this.balance < amount) {
        reject({ msg: "Your balance too low" });
      } else {
        this.balance -= amount;
        resolve({ msg: "Transaction successful", balance: this.balance });
      }
    });
  }
}

let accountholder = new ATM(5000);
let statusObj = accountholder.withDraw(7000);

statusObj
  .then((successmsg) => console.log(successmsg))   
  .catch((failuremsg) => console.log(failuremsg)) 
  .finally(() => console.log("Your current transaction is closed."));
