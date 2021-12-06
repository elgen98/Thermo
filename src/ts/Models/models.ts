export { Products };

class Products {
  firstPicture: string;
  secondPicture: string;
  name: string;
  size: string;
  price: number;
  cart: boolean;

  constructor(
    firstPicture: string,
    secondPicture: string,
    name: string,
    size: string,
    price: number,
    cart: boolean
  ) {
    this.firstPicture = firstPicture;
    this.secondPicture = secondPicture;
    this.name = name;
    this.size = size;
    this.price = price;
    this.cart = cart;
  }
}
