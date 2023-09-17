// Ternary conditional
type someType<T> = T extends string ? string : number;
type someValue2 = someType<string>; // string
type someValue1 = someType<boolean>; // number

type ExcludeType<T, U> = T extends U ? never : T;
type ExcludeTypeTest = ExcludeType<"a" | "b" | "c", "a">;
// T: "a" | "b" | "c"
// U: "a"
// "a" extends "a" => true => never
// "b" extends "a" => false => "b"
// "c" extends "a" => false => "c"

type ExtractType<T, U> = T extends U ? T : never;
type ExtractTypeTest = ExtractType<"a" | "b" | "c", "a" | "c">;

// Infering
type MyInfer<T> = T extends infer TF ? TF : any;
type Infer1 = MyInfer<string>;
type Infer2 = MyInfer<number>;
type Infer3 = MyInfer<{ value: number }>

type ArrayElementType<T> = T extends (infer E)[] ? E : T;
// type of item1 is `number`
type item1 = ArrayElementType<number[]>;
// type of item1 is `{name: string}`
type item2 = ArrayElementType<{ name: string }>;


// With Mapping types
type FlagsOption<T> = {
    [P in keyof T]: T[P] extends string ? P : never;
}[keyof T]
interface HumanBall {
    name: string;
    updateName: () => void;
}
type HumanNameType = FlagsOption<HumanBall>;
const Human1: HumanNameType = "name";

//nonnull
type NonNullCondition<T> = T extends null | undefined ? never : T;
type TestNonNull = NonNullCondition<string | null | undefined>;
