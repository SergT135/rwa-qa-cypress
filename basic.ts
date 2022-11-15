export {};
let name = 'fffssssssssssssss';
console.log(`Hi ${name}`);
//array
let list1: number [] = [1,2,3]
let list2: Array<number> = [1,2,3]


// class
class Employee{
    employeeName: string;
    constructor (name: string){
        this.employeeName = name;

    }
    
    hello(){
        console.log(`Hello ${this.employeeName}`)
    }
}
let emp1 = new Employee("DDDD");
console.log(emp1.employeeName)
emp1.hello()
