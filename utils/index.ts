import { Product } from "./interfaces";

export function total(a: number, b: number): number {
    return a + b;
}
total(8, 12);
// total(8, "12");

// const variable: dataTypes = value;
const age: number = 20;
const isStudent: boolean = true;
const school: string = 'Duy Tan';
console.log(age, isStudent, school);

// Tuple

// Enum
// Any
// Union
// Literal
// Void

//unknow
let aNumber: unknown;
// aNumber = 100;
if (typeof aNumber === "number") {
    aNumber.toFixed(2);
}
// aNumber.toFixed(2);

// never
// function throwError(err: string): never {
//     throw new Error(err);
// }
// throwError("This is a error for example");


// Interface
const products: Product = {
    name: "Car",
    brand: "Vinfast",
    color: "dark green"
}
function viewProduct(product: Product) {
    console.log(product);
}
viewProduct(products);


// Function overloading