function simpleUseState<T>(initial: T): [() => T, (value: T) => void] {
    return [() => initial, (value: T) => {
        initial = value;
    }];
}
const [value, setValue] = simpleUseState<string>("n2duc");
setValue(`Ngoc Duc ${value()}`);
console.log(value());

const [age, setAge] = simpleUseState<number>(20);
console.log(age());
setAge(21);
console.log(age());


interface IRank<R> {
    item: R;
    rank: number;
}
function ranker<Rank>(items: Rank[], rankCallback: (v: Rank) => number): Rank[] {
    const ranks: IRank<Rank>[] = items.map(item => ({
        item,
        rank: rankCallback(item),
    }));
    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map(rank => rank.item);
}
console.log(ranker([1,2,3,4], (number) => number * 2));

const JSFR: { name: string, difficulty: number }[] = [
    { name: "ReactJS", difficulty: 60 },
    { name: "AngularJS", difficulty: 80 },
    { name: "VueJS", difficulty: 70 },
]
const rank = ranker(JSFR, ({ difficulty }) => difficulty);
console.log(rank);