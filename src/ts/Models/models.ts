export {Products}

class Products {
    name: string;
    size: string;
    firstPicture: string;
    secondPicture: string;
    cart: boolean;
    price: number;

    constructor(
        name: string,
        size: string,
        firstPicture: string,
        secondPicture: string,
        cart: boolean,
        price: number,
        ){
        this.name = name;
        this.size = size;
        this.firstPicture = firstPicture;
        this.secondPicture = secondPicture;
        this.cart = cart;
        this.price = price;
    }
}