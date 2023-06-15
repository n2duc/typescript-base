let sayHi = () => {
    console.log("Hello mother fucker");
};
// sayHi = "Hi"

let funcReturnString = (): string => {
    console.log("Hi")
    return "Ngoc Duc"
}

let testFuncReturn = (test: string) => {
    return test;
}

let multiple = (num: number): number => {
    return num * 2;
    // return `${num}`
}

let multiple2 = (num: number): void => {
    console.log(num);
    // Do something but don't return
}

let sum = (num1: number, num2: number, another?: number) => {
    return num1 + num2;
}
sum(2, 3);

let funcObject = (user: { username: string, age: number, isStudent: boolean, phone?: string }) => {
    console.log(user.username);
}