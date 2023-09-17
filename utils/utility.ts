interface Todo {
    title: string;
    description: string;
    isDelete: boolean;
}

// Partial<Type>
type PartialTodo = Partial<Todo>;
/* Tuong tu
type PartialTodo = {
    title?: string | undefined;
    description?: string | undefined;
    isDelete?: boolean | undefined;
}
*/
function updateTodo(todo: Todo, newTodo: PartialTodo) {
    return { ...todo, ...newTodo };
}
console.log(updateTodo(
    { title: "Hi", description: "Hello", isDelete: true },
    { description: "Goodbye" },
));

// Required<Type>
// Nguoc lai voi Partial
interface User {
    userId?: number,
    password?: string,
}
const UserA: User = {};
type UserRequired = Required<User>;
const UserB: UserRequired = { userId: 123123, password: "sasdasd" };

// Readonly<Type>
interface Book {
    title: string;
}
const LoveBook: Readonly<Book> = { title: "Love or Life" }
// LoveBook.title = "asdasd" => Cannot assign to 'title' because it is a read-only property

// Record<Keys, Type>
interface DogInfo {
    age: number;
    breed: string;
}
type DogName = "Cun" | "Bong" | "Kem";
const dogs: Record<DogName, DogInfo> = {
    Cun: { age: 6, breed: "Ahihi" },
    Bong: { age: 3, breed: "asdasd" },
    Kem: { age: 1, breed: "kjajsd" },
}
dogs.Bong;

const newRecord: Record<number, string> = {
    1: "Nguyen",
    2: "Ngoc",
    3: "Duc"
}

// Pick<Type, Keys>
// Tao ra type moi, lay nhung thuoc tinh cua Type can thiet
interface Car {
    name: string;
    price: number;
    color: string;
}
type CarPreview = Pick<Car, "name" | "price">;
const newCar: CarPreview = {
    name: "Mecerdes",
    price: 123123,
    // color: "red"
}

// Omit<Type, Keys>
// Nguoc lai voi Pick, loai bo cac thuoc tinh khong can cua doi tuong
type CarWithoutColor = Omit<Car, "color">;
const oldCar: CarWithoutColor = {
    name: "Honda",
    price: 267893,
}

// Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<"a" | "b" | "c", "a">;
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
type T2 = Exclude<string | number | (() => void), () => void>;
type Shape = { kind: "circle"; radius: number } | { kind: "square"; x: number } | { kind: "triangle"; x: number; y: number };
type T3 = Exclude<Shape, { kind: "circle" }>

// Extract<Type, Union>
// Nguoc lai voi Exclude
type TestNumberOrString = number | string
type PickString = Extract<TestNumberOrString, string>

// Parameters<Type>
// Trich xuat type cua cac parameters tu mot function
const functionA = (a: number, b: number): number => a + b;
type ParameterFuncA = Parameters<typeof functionA>;
const newArgs: ParameterFuncA = [1, 2];

// ReturnType<Type>
// Tao moi mot Type tu return type cua mot function
type ReturnTypeFuncA = ReturnType<typeof functionA>;
const returnType: ReturnTypeFuncA = 1;

// Awaited<Type>
// Trich xuat return type tu resolve type cua Promise | await function
type justNumber = Awaited<Promise<string>>

async function fetchData(): Promise<string> {
    // fetch data and return a string
    return "data";
}
type ResolvedResult = Awaited<ReturnType<typeof fetchData>>;

// NonNullable<Type>
type NonNullTypeTest = NonNullable<string[] | null | undefined>
// remove null