// Add type to the functions below
const twoNumberSum = (a: number, b: number): number => {
	return a + b;
};

type TwoSumArgs = {
    first: number;
    second: number;
}
const twoNumberSumV1 = (params: TwoSumArgs) => {
	return params.first + params.second;
};

type User = {
    name: string;
    age: number;
    career: string;
}
const GetUserInfo = async () => {
	const data: User = await new Promise((resolve) => {
		const user = {
			name: 'code mely',
			age: 22,
			career: 'developer'
		}
		resolve(user)
	});
	return data;
};