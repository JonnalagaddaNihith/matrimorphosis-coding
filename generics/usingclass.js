var Employee = /** @class */ (function () {
    function Employee() {
        this.listOfUsers = [];
    }
    Employee.prototype.addUser = function (userData) {
        this.listOfUsers.push(userData);
    };
    Employee.prototype.printListOfUsers = function () {
        console.log(this.listOfUsers);
    };
    return Employee;
}());
var FTE = /** @class */ (function () {
    function FTE(empNo, empName) {
        this.empNo = empNo;
        this.empName = empName;
        // this.empDesignation = empDesignation
    }
    return FTE;
}());
var Interns = /** @class */ (function () {
    function Interns(internCode, internName, reportingManager) {
        this.internCode = internCode;
        this.internName = internName;
        this.reportingManager = reportingManager;
    }
    return Interns;
}());
var fte1 = new FTE(100, "Sudha");
var fte2 = new FTE(100, "GeethaPriya");
var fte3 = new FTE(100, "Hari");
var in1 = new Interns(1001, "Aravind", "Interns");
var in2 = new Interns(1002, "Aayush", "Interns");
var in3 = new Interns(1003, "Ajay", "Interns");
var empobj = new Employee();
empobj.addUser(fte1);
empobj.addUser(fte2);
empobj.addUser(fte3);
empobj.printListOfUsers();
var empInterns = new Employee();
empInterns.addUser(in1);
empInterns.addUser(in2);
empInterns.addUser(in3);
empInterns.printListOfUsers();
