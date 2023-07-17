interface IAuthor {
    id: number,
    username: string,
}
interface ICategory {
    id: number,
    title: string,
}
interface IPost {
    id: number,
    title: string,
    content: string,
    extra: IAuthor[] | ICategory[],
}

interface IPostBetter<T> {
    id: number,
    title: string,
    content: string,
    extra: T[],
}

const testPost: IPostBetter<String> = {
    id: 1,
    title: "Test",
    content: "Test",
    extra: ["1", "2", "3"],
}

interface IPostEvenBetter<T extends object> {
    id: number,
    title: string,
    content: string,
    extra: T[],
}
const testPost2: IPostEvenBetter<IAuthor> = {
    id: 2,
    title: "Test",
    content: "Test",
    extra: [{id: 1, username: 'duc'}],
    // extra: [{id: 1, username: 'duc', age: 12}], // Can not add new property IAuthor
}
const testPost3: IPostEvenBetter<ICategory> = {
    id: 2,
    title: "Test",
    content: "Test",
    extra: [{id: 1, title: 'duc'}],
}

// Generic Function
function exUnionType(id: string | string[], name: string | string[]) { // Union
    return {
        id,
        name
    }
}
function exGenericType<T extends string | string[]>(id: T, name: T) { // Generic
    return {
        id,
        name
    }
}
const getTuple = <T>(a: T, b: T): [T, T] => {
    return [a, b];
}
let stringArray = getTuple<string>("Ngoc", "Duc");
let numberArray = getTuple<number>(2, 3);
// But
// let mixArray = getTuple(2, "Duc");
// Argument of type 'string' is not assignable to parameter of type 'number'
// Fix it
const getTuple2 = <T, U>(a: T, b: U): [T, U] => {
    return [a, b];
}
let mixArray2 = getTuple2<number, string>(2, "Duc");
console.log(mixArray2);

// Generic Interface
interface IProcessor<T> {
    result:T;
    process(a: T, b: T): T;
}
// Generic Interface as Type
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kv1: KeyPair<number, string> = {
    key: 1,
    value: "script",
}
let kv2: KeyPair<number, number> = {
    key: 2,
    value: 812,
}
// Generic Interface as Function Type
interface KeyValueProcessor<T, U> {
    (key: T, value:  U): void;
}
function processNumKeyPairs(key: number, value: number): void {
    console.log("processNumKeyPairs: key = " + key + ", value = " + value);
}
function processStringKeyPairs(key: number, value:string):void { 
    console.log('processStringKeyPairs: key = '+ key + ', value = ' + value)
}
let numKVProcessor: KeyValueProcessor<number, number> = processNumKeyPairs;
numKVProcessor(1, 812);
let strKVProcessor: KeyValueProcessor<number, string> = processStringKeyPairs;
strKVProcessor(2, "Duc");
// Shorted
function processKeyPairs<T, U>(key: T, value: U): void {
    console.log(`processKeyPairs: key = ${key}, value = ${value}`);
}
let numKVProcessor2: KeyValueProcessor<number, number> =  processKeyPairs;
numKVProcessor2(1, 812);
let strKVProcessor2: KeyValueProcessor<number, string> =  processKeyPairs;
strKVProcessor2(2, "Duc");


// Generic Class
class KeyValuePair<T, U> { 
    private key: T | undefined;
    private value: U | undefined;

    setKeyValue(key: T, value: U): void { 
        this.key = key;
        this.value = value;
    }

    display():void { 
        console.log(`Key = ${this.key}, value = ${this.value}`);
    }
}
let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Duc");
kvp1.display();

interface IKeyValueProcessor<T, U> {
    process(key: T, value: U): void;
}
class kvProcessor<T, U> implements IKeyValueProcessor<T, U> {
    process(key: T, value: U): void {
        console.log(`Key = ${key}, value = ${value}`);
    }
}
let processTest: IKeyValueProcessor<number, string> = new kvProcessor();
processTest.process(8, "Ngoc");