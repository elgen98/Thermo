class Products {
    name: string;
    size: string;
    firstPicture: string;
    secondPicture: string;
    cart: boolean;
    price: number;

    constructor(
        namnet: string,
        storlek: string,
        bild1: string,
        bild2: string,
        vagn: boolean,
        pris: number,
        ){
        this.name = namnet;
        this.size = storlek;
        this.firstPicture = bild1;
        this.secondPicture = bild2;
        this.cart = vagn;
        this.price = pris;
    }
}