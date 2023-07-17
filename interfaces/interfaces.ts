interface IUser {
    username: string;
    email: string;
    age: number;
}

interface IAdmin extends IUser {
    adminId: number;
}

const clientAccount: IUser = {
    username: "Ngoc Duc",
    email: "ngocduc2002@gmail.com",
    age: 20,
}
const adminAccount: IAdmin = {
    username: "Ngoc Duc",
    email: "ngocduc@gmail.com",
    age: 20,
    adminId: 1,
}
console.log(clientAccount.age)