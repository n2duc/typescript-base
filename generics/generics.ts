interface IAuthor {
    id: number,
    username: string,
}
interface ICategory {
    id: number,
    title: string,
}
interface IPost {
    id: number,
    title: string,
    content: string,
    extra: IAuthor[] | ICategory[],
}

interface IPostBetter<T> {
    id: number,
    title: string,
    content: string,
    extra: T[],
}

const testPost: IPostBetter<String> = {
    id: 1,
    title: "Test",
    content: "Test",
    extra: ["1", "2", "3"],
}

interface IPostEvenBetter<T extends object> {
    id: number,
    title: string,
    content: string,
    extra: T[],
}
const testPost2: IPostEvenBetter<IAuthor> = {
    id: 2,
    title: "Test",
    content: "Test",
    extra: [{id: 1, username: 'duc'}],
    // extra: [{id: 1, username: 'duc', age: 12}], // Can not add new property IAuthor
}
const testPost3: IPostEvenBetter<ICategory> = {
    id: 2,
    title: "Test",
    content: "Test",
    extra: [{id: 1, title: 'duc'}],
}