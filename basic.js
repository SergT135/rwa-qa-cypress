"use strict";
exports.__esModule = true;
var name = 'fff';
console.log("Hi ".concat(name));
//array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple
var tuple1;
tuple1 = [1, "ffwwwaaaawww"];
console.log(tuple1[1]);
//enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c); // индекс позиции значения
var cc = Color[2];
console.log(cc);
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
