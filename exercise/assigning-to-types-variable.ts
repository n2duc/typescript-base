interface User {
    id: number;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    // role: "admin" | "user" |"super-admin";
    role: Role;
    post: Array<Post>;
}
interface Post {
    id: number;
    title: string;
}
type Role = "admin" | "user" |"super-admin";
const defaultUser: User = {
    id: 1,
    firstName: "Ngoc",
    lastName: "Duc",
    isAdmin: true,
    role: "admin",
    post: [
        {
            id: 1,
            title: "driven decide mountain wide rough accident include thee add especially substance"
        },
        {
            id: 2,
            title: "series mad column greatest wife dust everywhere tonight no thank key produce willing"
        }
    ]
};
const makeUser = (): User => {
    return {
        id: 8,
        firstName: "Ngoc",
        lastName: "Duc",
        isAdmin: true,
        role: "admin",
        post: [
            {
                id: 1,
                title: "driven decide mountain wide rough accident include thee add especially substance"
            },
            {
                id: 2,
                title: "series mad column greatest wife dust everywhere tonight no thank key produce willing"
            }
        ]
    }
}
const user = makeUser();

const getUserId = (user: User) => {
    return user.id;
};
getUserId(defaultUser)