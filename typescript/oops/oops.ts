abstract class Employee {
  constructor(
    protected id: number,
    protected name: string,
    protected salary: number
  ) {}

  abstract calculateBonus(): number;

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`;
  }
}

// Ploymorphism
class Developer extends Employee {
  constructor(id: number, name: string, salary: number, private language: string) {
    super(id, name, salary);
  }

  calculateBonus(): number {
    return this.salary * 0.1;
  }

  getDetails(): string {
    return super.getDetails() + `, Language: ${this.language}`;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, salary: number, private teamSize: number) {
    super(id, name, salary);
  }

  calculateBonus(): number {
    return this.salary * 0.2 + this.teamSize * 1000;
  }

  getDetails(): string {
    return super.getDetails() + `, Team Size: ${this.teamSize}`;
  }
}

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

const dev = new Developer(1, "Alice", 60000, "TypeScript");
const mgr = new Manager(2, "Bob", 90000, 5);

console.log(dev.getDetails());
console.log("Bonus:", dev.calculateBonus());

console.log(mgr.getDetails());
console.log("Bonus:", mgr.calculateBonus());

const account = new BankAccount(5000);
account.deposit(2000);
console.log("Final Balance:", account.getBalance());
