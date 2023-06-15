type UserType = {
    username: string;
    age: number;
    phone?: string;
}

let betterFunc = (user: UserType) => {
    console.log(user.username);
}

type myFunc = (a: number, b: string) => void
let writeFunc: myFunc = (num, str) => {
    console.log(num + " times " + str);
}

type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light";
}
const userWithTheme: UserType2 = {
    username: "Ngoc Duc",
    age: 20,
    theme: "dark",
    // theme: "pink"
}