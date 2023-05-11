const username: string = 'Ngoc Duc';
const age: number = 20;
console.log({username, age});

const buildName = (name: string, age: number) => {
    return name + " " + age;
};
console.log(buildName(username, age));
export {}; //Fix redeclare block-scoped variable