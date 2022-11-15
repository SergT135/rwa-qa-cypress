"use strict";
exports.__esModule = true;
var name = 'fffssssssssssssss';
console.log("Hi ".concat(name));
//array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.hello = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("DDDD");
console.log(emp1.employeeName);
emp1.hello();
