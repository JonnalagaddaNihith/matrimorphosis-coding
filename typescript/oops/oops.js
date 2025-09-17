var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Salary: ").concat(this.salary);
    };
    return Employee;
}());
// Ploymorphism
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(id, name, salary, language) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.language = language;
        return _this;
    }
    Developer.prototype.calculateBonus = function () {
        return this.salary * 0.1;
    };
    Developer.prototype.getDetails = function () {
        return _super.prototype.getDetails.call(this) + ", Language: ".concat(this.language);
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, salary, teamSize) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.calculateBonus = function () {
        return this.salary * 0.2 + this.teamSize * 1000;
    };
    Manager.prototype.getDetails = function () {
        return _super.prototype.getDetails.call(this) + ", Team Size: ".concat(this.teamSize);
    };
    return Manager;
}(Employee));
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited: ".concat(amount, ", New Balance: ").concat(this.balance));
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var dev = new Developer(1, "Alice", 60000, "TypeScript");
var mgr = new Manager(2, "Bob", 90000, 5);
console.log(dev.getDetails());
console.log("Bonus:", dev.calculateBonus());
console.log(mgr.getDetails());
console.log("Bonus:", mgr.calculateBonus());
var account = new BankAccount(5000);
account.deposit(2000);
console.log("Final Balance:", account.getBalance());
