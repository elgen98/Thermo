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
  "Pälsjacka",
  "",
  "image1.6ba3e079.png",
  "image11.9b11cc4c.png",
  false,
  2500
);

let productII = new Products(
  "Tjock Dunjacka",
  "",
  "image2.4f55778f.png",
  "image22.f979d21b.png",
  false,
  3300
);

let productIII = new Products(
  "Tunn Dunjacka",
  "",
  "image3.e7559f55.png",
  "image33.5f6dfb74.png",
  false,
  2300
);

let productIV = new Products(
  "Dunis",
  "",
  "image4.8e6f679b.png",
  "image44.6dc488c7.png",
  false,
  4000
);

let productV = new Products(
  "Silver Dunis",
  "",
  "image5.f26372db.png",
  "image55.35abb97f.png",
  false,
  3500
);

let productVI = new Products(
  "Lång Dunster",
  "",
  "image6.214487d0.png",
  "image66.85ae833f.png",
  false,
  4300
);

let productVII = new Products(
  "Ökenräven",
  "",
  "image7.b3b5c798.png",
  "image77.7490008f.png",
  false,
  8000
);

let productVIII = new Products(
  "Skinande Dunis",
  "",
  "image8.ea8d10e3.png",
  "image88.1dadde8e.png",
  false,
  10000
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

    let productDiv: HTMLDivElement = document.createElement("div");

    name.innerHTML = productArr[i].name;
    size.innerHTML = productArr[i].size;
    img.src = productArr[i].firstPicture;
    img2.src = productArr[i].secondPicture;
    price.innerHTML = productArr[i].price.toString();
    addToCartBtn.innerHTML = "ADD TO CART";

    productDiv.appendChild(name);
    productDiv.appendChild(size);
    productDiv.appendChild(img);
    productDiv.appendChild(img2);
    productDiv.appendChild(price);
    productDiv.appendChild(btn);
    productDiv.appendChild(addToCartBtn);
    productContainer.appendChild(productDiv);

    btn.className = "btnStyle";
    productContainer.className = "productContainerStyle";

    btn.addEventListener("click", handleClick);
  }
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
