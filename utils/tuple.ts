let rgb: [number, number, number] = [255, 0, 0];
type User2 = [number, string];
const newUser: User2 = [1, "Ngoc Duc"];

// [number, number] => [2, 3]
type ThreeDCoordinate = [x: number, y: number, z: number];
function addThreeDCoordinate(a: ThreeDCoordinate, b: ThreeDCoordinate): ThreeDCoordinate {
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
addThreeDCoordinate([1,2,3], [4,5,6]);

//useState
export function simpleUseState(initial: string): [() => string, (value: string) => void] {
    return [() => initial, (value: string) => {
        initial = value;
    }];
}
const [value, setValue] = simpleUseState("n2duc");
setValue(`Ngoc Duc ${value()}`);
console.log(value());