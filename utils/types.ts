const school = "Duy Tan";

interface IUniversity {
    name: string;
    location: string;
    top: number;
}
interface IIdentity {
    id: number;
    name: string;
}
interface IContact {
    email: string;
    phone: string;
}
// Union type TypeA | TypeB
type Other = IIdentity | IContact;
// Intersection type &
type Student = IIdentity & IContact;
type School = IUniversity & IContact;
let studentA: Student = {
    id: 8,
    name: "Ngoc Duc",
    email: "ngocduc@gmail.com",
    phone: "0324234",
};
// Casting type
// Assertion
