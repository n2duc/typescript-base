let variable = "hello";
variable = "hi";
// variable = 1; // Error
// Tự động xác định kiểu biến

let ageAuthor = 20;
// age = "twenty"; // Error

let ageWithType: number = 20;
ageWithType = 21;

let testString: string = "dumemay";
testString = "dumemay2";

// Kiểu dữ liệu boolean
let isDone: boolean = false;
isDone = true;

let testStringOrNumber: string | number = "dumemay";
testStringOrNumber = 1;


// Kiểu dữ liệu mảng
let names = ["Ngoc Duc", "Ngoc Duc 2", "Ngoc Duc 3"];
// names.push(2); // Error
names.push("Ngoc Duc 4");

// NumberArray
let list: Array<number> = [1, 2, 3];
let listNumber: number[] = [1, 2, 3];

// StringArray
let testStringArray: string[];
// testStringArray = [1,2,3]; // Error
testStringArray = ["1", "2", "3"];

// String or Number Array
let testStringOrNumberArray: (string | number)[] = ["1", 2, 3];


// Object
let userTest = {
    name: "Ngoc Duc",
    age: 20,
    isStudent: true,
}
// user.age = 'eighteen'; // Error
userTest.age = 21;
// user.phone = "0123456789"; // Error

let userObj: {
    username: string;
    age: number;
    isStudent: boolean;
}
userObj = {
    username: "Ngoc Duc",
    age: 20,
    isStudent: true,
    // phone: "0123456789", can not add new property
}
let userObj2: {
    username: string;
    age: number;
    isStudent: boolean;
    phone?: string; // optional property
}
userObj2 = {
    username: "Ngoc Duc",
    age: 20,
    isStudent: true,
    phone: "0123456789",
}

// ANY
let testAny: any;
testAny = 1;
testAny = "1";
testAny = true;
testAny = [1, 2, 3];

let testAnyArray: any[];
testAnyArray = [1, "one", true, [], {}];