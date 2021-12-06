import { Products } from "./Models/models";

window.onload = function () {
  //   document.getElementById("cardType").addEventListener("change", addCardForm);
  printProducts();
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

function printProducts() {
  for (let i: number = 0; i < productArr.length; i++) {
    let img: HTMLImageElement = document.createElement("img");
    let img2: HTMLImageElement = document.createElement("img");
    let name: HTMLHeadingElement = document.createElement("h2");
    let price: HTMLSpanElement = document.createElement("span");
    let size: HTMLSpanElement = document.createElement("span");
    let btn: HTMLButtonElement = document.createElement("button");

    let productContainer: HTMLElement =
      document.getElementById("productContainer");

    let productDiv: HTMLDivElement = document.createElement("div");

    img.src = productArr[i].firstPicture;
    img2.src = productArr[i].secondPicture;
    name.innerHTML = productArr[i].name;
    price.innerHTML = productArr[i].price.toString();
    size.innerHTML = productArr[i].size;

    productDiv.appendChild(img);
    productDiv.appendChild(img2);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(size);
    productDiv.appendChild(btn);
    productContainer.appendChild(productDiv);

    btn.className = "btnStyle";
    productContainer.className = "productContainerStyle";

    btn.addEventListener("click", handleClick);
  }
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
