const username: string = 'Ngoc Duc';
const age: number = 20;
// console.log({username, age});

const buildName = (name: string, age: number) => {
    return name + " " + age;
};
// console.log(buildName(username, age));

const printName = (obj: {firstName: string, lastName?: string}) => {
    // if (obj.lastName !== undefined) {
    //     console.log(obj.lastName.toUpperCase());
    // }
    console.log(obj.lastName?.toUpperCase());
} 
// printName({firstName: "Ngoc Duc"});
// printName({firstName: "Ngoc", lastName: "Duc"});

const printID = (id: number | string) => {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}
const printFood = (food: string[] | string) => {
    if (Array.isArray(food)) {
        console.log("Foods: " + food.join(" - "));
    } else {
        console.log("Food: " + food );
    }
}
// printID(10);
// printID("10");

// Type and interface
type Point = {
    x: number,
    y: number
}
type PointB = Point & {
    z: number,
}
interface PointX {
    x: number;
    y: number;
}
interface PointY extends PointX {
    z: number;
}
function printPoint(p: PointY): void {
    console.log("Location x: " + p.x)
    console.log("Location y: " + p.y)
    console.log("Location z: " + p.z)
}
// printPoint({x: 3, y:4, z: 5});

// Array & Object
const Cars: string[] = ["Honda", "Yamaha", "Toyota", "Tesla"]
const scores: (string | number)[] = ["one", 1, "two", 2];

interface Employee {
    id: number;
    name: string;
    dept: string; 
    salary: number;
}
const employees: Employee[] = [
    { id: 1, name: "Williams", dept: "it", salary: 2000 },
    { id: 2, name: "Brown", dept: "hr", salary: 1100 },
    { id: 3, name: "Thomas", dept: "hr", salary: 800 },
    { id: 4, name: "Roberts", dept: "it", salary: 2200 },
]
// --- Array with forEach, filter, reduce, find, map
const carList = Cars.forEach((car, index) => {
    return index + ": " +  car;
})
const salary = employees.map((employee) => {
    return employee.salary*23000;
})
// console.log(salary);
const IT = employees.filter((employee) => {
    return employee.dept === 'it';
})
// console.log(IT)
const AuthorEmp = employees.find((employee) => {
    return employee.dept === 'it';
})
// console.log(AuthorEmp);
const deptTag = employees.map(item => item.dept); // Lay ra cac thuoc tinh cua employees duoi dang array
// [ 'it', 'hr', 'hr', 'it' ]
// Cac cach remove element trung nhau
const deptList1: string[] = [...new Set(deptTag)]
const deptList2: string[] = Array.from(new Set(deptTag))
const deptList3: string[] = deptTag.filter((item, index) => deptTag.indexOf(item) === index)

const deptTotalSalary: object[] = deptList3.map((deptName) => {
    const totalSalary: number = employees
        .filter((record) => record.dept === deptName)
        .reduce((total, employee) => total + employee.salary, 0);
    return {
        'dept': deptName,
        'salary': totalSalary,
    }
})
console.log(deptTotalSalary);