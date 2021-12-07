import { Products } from "./Models/models";

window.onload = function () {
  //   document.getElementById("cardType").addEventListener("change", addCardForm);
  printProducts();
  document.getElementById("cartBtn").addEventListener("click", printCart);
};

function addCardForm() {
  let cardItems = document.getElementsByClassName("cardInfoHidden");
  for (let i = cardItems.length - 1; i >= 0; --i) {
    cardItems[i].className = "cardInfoShow";
  }
}

let productI = new Products(
  "image1.6ba3e079.png",
  "image11.9b11cc4c.png",
  "Pälsjacka",
  "",
  2500,
  false
);

let productII = new Products(
  "image2.4f55778f.png",
  "image22.f979d21b.png",
  "Tjock Dunjacka",
  "",
  3300,
  false
);

let productIII = new Products(
  "image3.e7559f55.png",
  "image33.5f6dfb74.png",
  "Tunn Dunjacka",
  "",
  2300,
  false
);

let productIV = new Products(
  "image4.8e6f679b.png",
  "image44.6dc488c7.png",
  "Dunis",
  "",
  4000,
  false
);

let productV = new Products(
  "image5.f26372db.png",
  "image55.35abb97f.png",
  "Silver Dunis",
  "",
  3500,
  false
);

let productVI = new Products(
  "image6.214487d0.png",
  "image66.85ae833f.png",
  "Lång Dunster",
  "",
  4300,
  false
);

let productVII = new Products(
  "image7.b3b5c798.png",
  "image77.7490008f.png",
  "Ökenräven",
  "",
  8000,
  false
);

let productVIII = new Products(
  "image8.ea8d10e3.png",
  "image88.1dadde8e.png",
  "Skinande Dunis",
  "",
  10000,
  false
);

let productArr = [
  productI,
  productII,
  productIII,
  productIV,
  productV,
  productVI,
  productVII,
  productVIII,
];

let cartList: Products[] = [];

function printProducts() {
  for (let i: number = 0; i < productArr.length; i++) {
    let name: HTMLHeadingElement = document.createElement("h2");
    let size: HTMLSpanElement = document.createElement("span");
    let img: HTMLImageElement = document.createElement("img");
    let img2: HTMLImageElement = document.createElement("img");
    let price: HTMLSpanElement = document.createElement("span");
    let btn: HTMLButtonElement = document.createElement("button");
    let addToCartBtn: HTMLButtonElement = document.createElement("button");

    addToCartBtn.addEventListener("click", () => {
      //productArr[i].cart = true;
      cartList.push(productArr[i]);
      console.log(cartList);
    });

    let productContainer: HTMLElement =
      document.getElementById("productContainer");

    let productsDiv: HTMLDivElement = document.createElement("div");

    name.innerHTML = productArr[i].name;
    size.innerHTML = productArr[i].size;
    img.src = productArr[i].firstPicture;
    img2.src = productArr[i].secondPicture;
    price.innerHTML = productArr[i].price.toString();
    addToCartBtn.innerHTML = "ADD TO CART";

    productsDiv.appendChild(name);
    productsDiv.appendChild(size);
    productsDiv.appendChild(img);
    productsDiv.appendChild(img2);
    productsDiv.appendChild(price);
    productsDiv.appendChild(btn);
    productsDiv.appendChild(addToCartBtn);
    productContainer.appendChild(productsDiv);

    btn.className = "btnStyle";
    productContainer.className = "productContainerStyle";

    btn.addEventListener("click", () => {
      detailClick(i);
    });
  }
}

function detailClick(position) {
  let name: HTMLHeadingElement = document.createElement("h2");
  let size: HTMLSpanElement = document.createElement("span");
  let img2: HTMLImageElement = document.createElement("img");
  let price: HTMLSpanElement = document.createElement("span");
  let detailDiv: HTMLDivElement = document.createElement("div");
  let detailContainer: HTMLDivElement = document.getElementById(
    "cart-container"
  ) as HTMLDivElement;

  detailContainer.innerHTML = "";
  name.innerHTML = productArr[position].name;
  size.innerHTML = productArr[position].size;
  img2.src = productArr[position].secondPicture;
  price.innerHTML = productArr[position].price.toString();

  detailDiv.appendChild(name);
  detailDiv.appendChild(size);
  detailDiv.appendChild(img2);
  detailDiv.appendChild(price);
  detailContainer.appendChild(detailDiv);

  handleClick();
}

function printCart() {
  let cartContainer: HTMLDivElement = document.getElementById(
    "cart-container"
  ) as HTMLDivElement;
  cartContainer.innerHTML = "";

  if (cartList.length > 0) {
    for (let i: number = 0; i < cartList.length; i++) {
      let productDiv: HTMLDivElement = document.createElement("div");
      let name: HTMLHeadingElement = document.createElement("h2");
      let size: HTMLSpanElement = document.createElement("span");
      let img: HTMLImageElement = document.createElement("img");
      let img2: HTMLImageElement = document.createElement("img");
      let price: HTMLSpanElement = document.createElement("span");
      let removeBtn: HTMLButtonElement = document.createElement("button");

      name.innerHTML = cartList[i].name;
      size.innerHTML = cartList[i].size;
      img.src = cartList[i].firstPicture;
      img2.src = cartList[i].secondPicture;
      price.innerHTML = cartList[i].price.toString();
      removeBtn.innerHTML = "REMOVE";

      removeBtn.addEventListener("click", () => {
        cartList.splice(i, 1);
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
        printCart();
      });

      productDiv.appendChild(name);
      productDiv.appendChild(size);
      productDiv.appendChild(img);
      productDiv.appendChild(img2);
      productDiv.appendChild(price);
      productDiv.appendChild(removeBtn);

      cartContainer.appendChild(productDiv);
    }
  } else {
    let emptyMsg: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    emptyMsg.innerHTML = "Your cart is empty";
    cartContainer.appendChild(emptyMsg);
  }

  handleClick();
}

var modal = document.getElementById("productModal") as HTMLDivElement;

var spanis = document.getElementsByClassName("disappear")[0] as HTMLSpanElement;

function handleClick() {
  modal.style.display = "block";
}

spanis.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
