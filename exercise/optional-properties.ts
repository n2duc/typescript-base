type Params = {
    first: string;
    last?: string;
}
const getName = (params: Params) => {
    if (params.last) {
        return `${params.first} ${params.last}`
    }
    return params.first;
}
const myName = getName({
    first: "Ngoc",
    last: "Duc"
})