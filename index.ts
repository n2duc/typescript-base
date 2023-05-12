const username: string = 'Ngoc Duc';
const age: number = 20;
console.log({username, age});

const buildName = (name: string, age: number) => {
    return name + " " + age;
};
console.log(buildName(username, age));

const printName = (obj: {firstName: string, lastName?: string}) => {
    // if (obj.lastName !== undefined) {
    //     console.log(obj.lastName.toUpperCase());
    // }
    console.log(obj.lastName?.toUpperCase());
} 
printName({firstName: "Ngoc Duc"});
printName({firstName: "Ngoc", lastName: "Duc"});

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
printID(10);
printID("10");

type Point = {
    x: number,
    y: number
}
interface PointX {
    x: number,
    y: number
}
function printPoint(p: Point) {
    console.log("Location x: " + p.x)
    console.log("Location y: " + p.y)
}
printPoint({x: 3, y:4});

export {}; //Fix redeclare block-scoped variable