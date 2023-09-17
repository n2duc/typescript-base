const devices = [
    { name: "Macbook", price: 1299 },
    { name: "Acer", price: 899 },
    { name: "MSI", price: 1199 },
];
// ['Macbook', 'Acer', 'MSI']
// [1299, 899, 1199]

function getDevicesKey<D, K extends keyof D>(items: D[], key: K): D[K][] {
    return items.map(item => item[key]);
}
console.log(getDevicesKey(devices, "name"));
console.log(getDevicesKey(devices, "price"));