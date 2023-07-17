interface AddTwoNumbersArgs {
    first: number;
    second: number;
}
const addTwoNumber = (params: AddTwoNumbersArgs) => {
    return params.first + params.second;
}
console.log(addTwoNumber({ first: 2, second: 4 }));