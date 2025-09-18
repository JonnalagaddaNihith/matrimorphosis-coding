function createEmployeeIDCard(empCode, bloodgroup, emergencyContactNumber) {
    //logic to create employee card with empno, blood group
    console.log("Employee code = ".concat(empCode));
    console.log("Blood group = ".concat(bloodgroup));
    console.log("Emergency Contact Number = ".concat(emergencyContactNumber));
}
createEmployeeIDCard(1001, "A+ve", 8998797987);
createEmployeeIDCard("G1001", "A+ve", 8998797987);
var response1 = { data: "Success" }; // Uses default `string`
var response2 = { data: 200 }; // Overrides default type
console.log(response1.data);
console.log(response2.data);
