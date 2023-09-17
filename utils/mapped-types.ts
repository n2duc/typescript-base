// type Developer = {
//     name: string,
// }
type Developer = {
    name: string;
    [key: string]: string | number | boolean; // mapped type
};
const devFe: Developer = {
    name: "Ngoc Duc",
    career: "FE",
    yoe: 3,
};

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean; // mapped type
};
type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
};
// Property: darkMode, newUserProfile => convert to boolean
type FeatureOptions = OptionsFlags<Features>;

// Mapping Modifiers
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};
type LockedAccount = {
    readonly id: string;
    readonly name: string;
};
type UnlockedAccount = CreateMutable<LockedAccount>;

// using mapped to rewrite Require<Type>
type Concrete<T> = {
    [P in keyof T]-?: T[P];
};
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};
type UserMap = Concrete<MaybeUser>;

// Key Remapping via as
// type MappedTypeWithNewProperties<Type> = {
//     [Properties in keyof Type as NewKeyType]: Type[Properties]
// }
type Device = {
    manufacturer: string;
    price: number;
};
type Formatter<Type> = {
    [Key in keyof Type as `format${Capitalize<string & Key>}`]: (value: Type[Key]) => string;
} & {
    [Key in keyof Type as `onSubmit${Capitalize<string & Key>}`]?: (value: Type[Key]) => string;
}
type DeviceFormatter = Formatter<Device>;
// formatManufacturer: (value: string) => string;
// formatPrice: (value: number) => string;

// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
interface Circle {
    kind: "circle";
    radius: number;
}
type KindlessCircle = RemoveKindField<Circle>;


type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
type Config = EventConfig<SquareEvent | CircleEvent>