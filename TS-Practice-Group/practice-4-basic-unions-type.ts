// Ex-1. Add type for user with gender is one of "male", "female", "unknown"
type Gender = "male" | "female" | "unknown";
type User = {
    name: string;
    age: number;
    gender: Gender;
}
const user: User = {
	name: "Huy dep chai",
	age: 18,
	gender: "unknown"
}

// Ex-2. Update Ex-1 to make gender accept value of "male", "female", "unknown" or any string
type Gender2 = "male" | "female" | "unknown";
type AnyStringGender = "male" | "female" | "unknown" | Omit<string, Gender2>; 
type User2 = {
    name: string;
    age: number;
    gender: AnyStringGender;
}
const user2: User2 = {
	name: "Huy dep chai",
	age: 18,
	gender: "asdasdasd"
}