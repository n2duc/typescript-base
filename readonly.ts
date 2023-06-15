type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number;
}
let myUser: User = {
    _id: "123",
    name: "Ngoc Duc",
    email: "ngocduc@gmail.com",
    isActive: true,
}
myUser.name = "Ngoc Duc 2";
console.log(myUser)