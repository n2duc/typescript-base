export interface Product {
    name: string;
    brand: string;
    color: string;
}
// Có thể khai báo trùng (nó sẽ merge 2 cái lại với nhau) => k nên dùng
// interface Product { price?: number };

export interface ProductNewFeature {
    speed?: number;
}
export interface ProductNew extends Product {
    price?: number;
}

export interface ICard {
    title: string;
    description: string;
    link: string;
}

//assertion
export type FinalProduct = Product & ProductNewFeature;