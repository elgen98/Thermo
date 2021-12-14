export { Products };

class Products {
  firstPicture: string;
  secondPicture: string;
  name: string;
  size: string;
  price: number;
  totalPrice: number;
  quantity: number;
  detailText: string;
  color: string;

  constructor(
    firstPicture: string,
    secondPicture: string,
    name: string,
    size: string,
    price: number,
    totalPrice: number,
    quantity: number,
    detailText: string,
    color: string
  ) {
    this.firstPicture = firstPicture;
    this.secondPicture = secondPicture;
    this.name = name;
    this.size = size;
    this.price = price;
    this.totalPrice = totalPrice;
    this.quantity = quantity;
    this.detailText = detailText;
    this.color = color;
  }
}
