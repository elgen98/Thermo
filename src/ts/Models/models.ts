export { Products };

class Products {
  firstPicture: string;
  secondPicture: string;
  name: string;
  size: string;
  price: number;
  cart: boolean;
  detailText: string;

  constructor(
    firstPicture: string,
    secondPicture: string,
    name: string,
    size: string,
    price: number,
    cart: boolean,
    detailText: string
  ) {
    this.firstPicture = firstPicture;
    this.secondPicture = secondPicture;
    this.name = name;
    this.size = size;
    this.price = price;
    this.cart = cart;
    this.detailText = detailText;
  }
}
