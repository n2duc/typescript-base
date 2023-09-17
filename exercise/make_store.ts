type Store = {
    name: string;
    age: number;
    friend: string[];
}

const myStore = createStore({
    name: "Ngoc Duc",
    age: 20,
    friend: [],
})

const age = myStore.get("age");
// myStore.set("age", 30);
myStore.set("age", (currentAge) => currentAge + 1);

function createStore<T extends Record<string, any>>(initialState: T) {
    const store = initialState;
    return {
        set<K extends keyof T>(key: K, cb: (current: T[K]) => T[K]) {
            store[key] = cb(store[key]);
        },
        get<K extends keyof T>(key: K) {
            return store[key];
        }
    }
}

type MyStore = ReturnType<typeof createStore<Store>>;

function Header(store: MyStore) {
    store.get("age");
    store.set("age", () => 2);
    return "Hello"
}

Header(myStore);