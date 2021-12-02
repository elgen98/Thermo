import { Products } from "./Models/models";

let productI = new Products(
  "Pälsjacka",
  "",
  "../assets/image1.png",
  "../assets/image11.png",
  false,
  2500
);

let productII = new Products(
  "Tjock Dunjacka",
  "",
  "../assets/image2.png",
  "../assets/image22.png",
  false,
  3300
);

let productIII = new Products(
  "Tunn Dunjacka",
  "",
  "../assets/image3.png",
  "../assets/image33.png",
  false,
  2300
);

let productIV = new Products(
  "Dunis",
  "",
  "../assets/image4.png",
  "../assets/image44.png",
  false,
  4000
);

let productV = new Products(
  "Silver Dunis",
  "",
  "../assets/image5.png",
  "../assets/image55",
  false,
  3500
);

let productVI = new Products(
  "Lång Dunster",
  "",
  "../assets/image6.png",
  "../assets/image66.png",
  false,
  4300
);

let productVII = new Products(
  "Ökenräven",
  "",
  "../assets/image7.png",
  "../assets/image77.png",
  false,
  8000
);

let productVIII = new Products(
  "Skinande Dunis",
  "",
  "../assets/image8.png",
  "../assets/image88.png",
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

for (let i: number = 0; i < productArr.length; i++) {
  let name: HTMLHeadingElement = document.createElement("h2");
  let size: HTMLSpanElement = document.createElement("span");
  let img: HTMLImageElement = document.createElement("img");
  let price: HTMLSpanElement = document.createElement("span");

  let productContainer: HTMLElement =
    document.getElementById("productContainer");

  let productDiv: HTMLDivElement = document.createElement("div");

  name.innerHTML = productArr[i].name;
  size.innerHTML = productArr[i].size;
  img.src = productArr[i].firstPicture;
  price.innerHTML = productArr[i].price.toString();

  productDiv.appendChild(name);
  productDiv.appendChild(size);
  productDiv.appendChild(img);
  productDiv.appendChild(price);
  productContainer.appendChild(productDiv);

  productContainer.className = "productContainerStyle";
}

var modal = document.getElementById("produktModal") as HTMLDivElement;

var btn = document.getElementById("myBtn") as HTMLButtonElement;

var spanis = document.getElementsByClassName("disappear")[0] as HTMLSpanElement;

btn.onclick = function () {
  modal.style.display = "block";
};

spanis.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
