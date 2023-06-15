// Unions
function user(name: string, age: number | string) {
    return `name: ${name}, age: ${age}`
}

type Admin = {
    name: string;
    id: number;
}
type Client = {
    username: string;
    id: number;
}
let hitesh: Admin | Client = { name: "Hitesh", id: 1 };

function getDbId(id: number | string) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return id;
}
const numbers: (string | number)[] = [1, 2, "3"];

// Generics
function myFn(id: string | string[], name: string | string[]) { // Union
    return {
        id,
        name
    }
}
function myFn2<T extends string | string[]>(id: T, name: T) { // Generic
    return {
        id,
        name
    }
}