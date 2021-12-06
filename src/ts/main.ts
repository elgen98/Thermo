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
  "https://img01.ztat.net/article/spp-media-p1/975b832b5da135fa95459afac9e831dd/0497e1047c01452eabdaa5bf73f3ad42.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/7ce6b3c186d73c6c83a3089280c4b4ab/b34654d89ccb47e3ac01747b101e83e0.jpg?imwidth=156&filter=packshot",
  "Pälsjacka",
  "",
  2500,
  false
);

let productII = new Products(
  "https://img01.ztat.net/article/spp-media-p1/3c70ab6cbcf84a81aa4d93a0e8d61f5e/931ce05e03954e019b243f60ab5c3397.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/ac203266f7a6444d97a055ee5d275914/25c10042c7d44bca9a4293ca4d32b142.jpg?imwidth=156&filter=packshot",
  "Tjock Dunjacka",
  "",
  3300,
  false
);

let productIII = new Products(
  "https://img01.ztat.net/article/spp-media-p1/2e2653373d9d4600aca2884b21e1287e/111497f3cba0480290c3bd16ea81c4ab.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/945e8d6415ec4253b36873f9c84c36fd/0af67baf0bbc42b4b7721cbde50c95b0.jpg?imwidth=156&filter=packshot",
  "Tunn Dunjacka",
  "",
  2300,
  false
);

let productIV = new Products(
  "https://img01.ztat.net/article/spp-media-p1/4b47edaa76424f2b84c0b9f21c8abb3a/4258bda895964203be8fc47b799ba801.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/1143f8a9a3064e4dae3cee774952e83c/e0800cdfa3b14d459f49032924513199.jpg?imwidth=156&filter=packshot",
  "Dunis",
  "",
  4000,
  false
);

let productV = new Products(
  "https://img01.ztat.net/article/spp-media-p1/14f120b6e69a43babe509e2aeefd311f/b0fdb212532945049c376b356c3d73e8.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/60bdde7f1afe4ca8adad1851473a1785/6cc8fe9adfa044ea98ad4a7ca83fb72e.jpg?imwidth=156&filter=packshot",
  "Silver Dunis",
  "",
  3500,
  false
);

let productVI = new Products(
  "https://img01.ztat.net/article/spp-media-p1/1bd4f7998671401db5ec1be64b6ef189/8e691e6ad22f47848b19a729cb2bf445.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/bf2d293f1ad04090818bd3860dff7f13/fdd5d12c96de4307989eb65199062b3d.jpg?imwidth=156&filter=packshot",
  "Dunväst",
  "",
  4300,
  false
);

let productVII = new Products(
  "https://img01.ztat.net/article/spp-media-p1/678b276155cd3f8ba6e661b963742508/e9b70c633451466788704ece7f5d2c81.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/275782c86b8d338fa9f8a621bb3585cb/3a5d271abcac477ba9c6018f29122b56.jpg?imwidth=156&filter=packshot",
  "Ökenräven",
  "",
  8000,
  false
);

let productVIII = new Products(
  "https://img01.ztat.net/article/spp-media-p1/fe881b5c02094390995ce8aaf7c99da3/cbe900b191ed48b5bcd3a2878b8059cb.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/290bb64327674e7c86f18c5512f9b406/853cdb09743443c2b95a70125905416f.jpg?imwidth=156&filter=packshot",
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
    img.className = "firstImg";
    img2.className = "secondImg";
    productContainer.className = "productContainerStyle";

    img.style.display = "block";
    img2.style.display = "none";

    img.onmouseover = function () {
      img.style.display = "none";
      img2.style.display = "block";
    }

    img2.onmouseout = function () {
      img.style.display = "block";
      img2.style.display = "none";
    }

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

