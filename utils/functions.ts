// Function Overloading
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
    return a + b;
}
add(2, 3);
add("2", "3");

interface Coordinate {
    x: number;
    y: number;
}
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    return {
        ...obj,
    };
}
function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return { x, y };
}
parseCoordinateFromObject({ x: 10, y: 20 });
parseCoordinateFromNumbers(10, 20);

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
    let coord = {
        x: arg1 as number,
        y: arg2 as number,
    }
    if (typeof arg1 === "object") {
        coord = { ...arg1 as Coordinate }
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        }
    }
    return coord;
}
parseCoordinate(8, 12);
parseCoordinate({ x: 12, y: 8 });

// Normal function
function addNumbers(a: number, b: number): number {
    return a + b;
}
addNumbers(1, 2);
// Arrow function
const addStrings = (x: string, y: string): string => {
    return x.concat(y);
}
addStrings("a", "b");
// Default parameters
function ExampleFunc1(a: number = 1, b: number = 2): number {
    return a * b;
}
ExampleFunc1(); // 3
//Union types
function formatExample(title: string, desc: string, amount: number | string): string {
    return `${title} ${desc} ${amount}`;
}
formatExample("Hello", "fuking", 20);
formatExample("Hello", "fuking", "20");
// Void function
function contactExample(email: string, phone: number): void {
    console.log(`${email} ${phone}`)
}
contactExample("Duc", 12312);
// Promise function
const fetchDataExample = (url: string): Promise<string> => Promise.resolve(`Get data from ${url}`);
fetchDataExample("https://example.api.dev");
// Rest paramaters
function infomation(id: number, ...names: string[]): string {
    return `${id} ${names.join("")}`;
}
infomation(2, "Duc", "Ngoc", "Nguyen"); // ["Duc", "Ngoc", "Nguyen"]
// With Callback
function handleExample(text: string, callback: () => void ): void {
    console.log(text);
    callback();
}
handleExample("Ngoc Duc", () => console.log("Hi"));

type UpdateArray = (n: number) => number;
// Function params with params
function handleFilterArray(numbers: number[], uplevel: (n: number) => number): number[] {
    return numbers.map(item => uplevel(item));
}
handleFilterArray([1,2,3,4], (n) => n*2 ) // [2,4,6,8]
// Function as types
function handleFilterArray2(numbers: number[], uplevel: UpdateArray): number[] {
    return numbers.map(item => uplevel(item));
}
handleFilterArray2([1,2,3,4], (n) => n*2 ) // [2,4,6,8]
// Function return function
function ExampleFunc3(value: number): (n: number) => number {
    return (n: number): number => n * value;
}
const Values = ExampleFunc3(2);
console.log(Values(3)); //3 * 2 = 6