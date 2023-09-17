// in
function log(obj: { name: string } | { age: number }) {
    if ("name" in obj) {
        console.log(obj.name);
    }
    if ("age" in obj) {
        console.log(obj.age);
    }
}
// typeof
const Machine = {
    name: "laptop",
    isCheep: false,
}
type MachineType = typeof Machine; // { name: string, isCheep: boolean }
type MachineKey = keyof typeof Machine; // "name" | "isCheep"