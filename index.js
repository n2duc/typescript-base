"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var username = 'Ngoc Duc';
var age = 20;
// console.log({username, age});
var buildName = function (name, age) {
    return name + " " + age;
};
// console.log(buildName(username, age));
var printName = function (obj) {
    var _a;
    // if (obj.lastName !== undefined) {
    //     console.log(obj.lastName.toUpperCase());
    // }
    console.log((_a = obj.lastName) === null || _a === void 0 ? void 0 : _a.toUpperCase());
};
// printName({firstName: "Ngoc Duc"});
// printName({firstName: "Ngoc", lastName: "Duc"});
var printID = function (id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
};
var printFood = function (food) {
    if (Array.isArray(food)) {
        console.log("Foods: " + food.join(" - "));
    }
    else {
        console.log("Food: " + food);
    }
};
function printPoint(p) {
    console.log("Location x: " + p.x);
    console.log("Location y: " + p.y);
    console.log("Location z: " + p.z);
}
// printPoint({x: 3, y:4, z: 5});
// Array & Object
var Cars = ["Honda", "Yamaha", "Toyota", "Tesla"];
var scores = ["one", 1, "two", 2];
var employees = [
    { id: 1, name: "Ngoc Duc", dept: "it", salary: 2000 },
    { id: 2, name: "Hanh Nhan", dept: "test", salary: 1100 },
    { id: 3, name: "Hat Dua", dept: "test", salary: 800 },
    { id: 4, name: "Me Xung", dept: "it", salary: 2200 },
];
// --- Array with forEach, filter, reduce, find, map
Cars.forEach(function (car, index) {
    console.log(index + ": " + car);
});
Cars.filter(function (car) {
    console.log(car.length > 5);
});
var salary = employees.map(function (employee) {
    return employee.salary * 23000;
});
console.log(salary);
var IT = employees.filter(function (employee) {
    return employee.dept === 'it';
});
console.log(IT);
var AuthorEmp = employees.find(function (employee) {
    return employee.id > 1;
});
console.log(AuthorEmp);
