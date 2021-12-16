import { Products } from "./Models/models";

window.onload = function () {
  printProducts();
  document.getElementById("cartBtn").addEventListener("click", printCart);
  //fetchAndPrintData();
};

let productI = new Products(
  "https://img01.ztat.net/article/spp-media-p1/975b832b5da135fa95459afac9e831dd/0497e1047c01452eabdaa5bf73f3ad42.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/7ce6b3c186d73c6c83a3089280c4b4ab/b34654d89ccb47e3ac01747b101e83e0.jpg?imwidth=156&filter=packshot",
  "Anthony jacket thermo down",
  "",
  2500,
  2500,
  1,
  false,
  "Anthony is a statement jacket cut from a thick down quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.",
  "black"
);

let productII = new Products(
  "https://img01.ztat.net/article/spp-media-p1/3c70ab6cbcf84a81aa4d93a0e8d61f5e/931ce05e03954e019b243f60ab5c3397.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/ac203266f7a6444d97a055ee5d275914/25c10042c7d44bca9a4293ca4d32b142.jpg?imwidth=156&filter=packshot",
  "Sebastian jacket down",
  "",
  3300,
  3300,
  1,
  false,
  "Sebastian is a statement jacket made from down. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.",
  "black"
);

let productIII = new Products(
  "https://img01.ztat.net/article/spp-media-p1/2e2653373d9d4600aca2884b21e1287e/111497f3cba0480290c3bd16ea81c4ab.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/945e8d6415ec4253b36873f9c84c36fd/0af67baf0bbc42b4b7721cbde50c95b0.jpg?imwidth=156&filter=packshot",
  "Ali jacket down",
  "",
  2300,
  2300,
  1,
  false,
  "Ali is a statement jacket made from down quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.",
  "black"
);

let productIV = new Products(
  "https://img01.ztat.net/article/spp-media-p1/4b47edaa76424f2b84c0b9f21c8abb3a/4258bda895964203be8fc47b799ba801.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/1143f8a9a3064e4dae3cee774952e83c/e0800cdfa3b14d459f49032924513199.jpg?imwidth=156&filter=packshot",
  "Herbert thermo jacket",
  "",
  4000,
  4000,
  1,
  false,
  "Herbert is a jacket made from quality down. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.",
  "black"
);

let productV = new Products(
  "https://img01.ztat.net/article/spp-media-p1/14f120b6e69a43babe509e2aeefd311f/b0fdb212532945049c376b356c3d73e8.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/60bdde7f1afe4ca8adad1851473a1785/6cc8fe9adfa044ea98ad4a7ca83fb72e.jpg?imwidth=156&filter=packshot",
  "Helin jacket synthetic",
  "",
  3500,
  3500,
  1,
  false,
  "Helin is a statement jacket cut from a wool quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.",
  "silver"
);

let productVI = new Products(
  "https://img01.ztat.net/article/spp-media-p1/1bd4f7998671401db5ec1be64b6ef189/8e691e6ad22f47848b19a729cb2bf445.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/bf2d293f1ad04090818bd3860dff7f13/fdd5d12c96de4307989eb65199062b3d.jpg?imwidth=156&filter=packshot",
  "Ella vest down",
  "",
  4300,
  4300,
  1,
  false,
  "Ella is a down vest cut from a thin wool quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.",
  "black"
);

let productVII = new Products(
  "https://img01.ztat.net/article/spp-media-p1/678b276155cd3f8ba6e661b963742508/e9b70c633451466788704ece7f5d2c81.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/275782c86b8d338fa9f8a621bb3585cb/3a5d271abcac477ba9c6018f29122b56.jpg?imwidth=156&filter=packshot",
  "Shima jacket faux fur",
  "",
  8000,
  8000,
  1,
  false,
  "Shima is a statement jacket cut from a thin wool quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.",
  "black"
);

let productVIII = new Products(
  "https://img01.ztat.net/article/spp-media-p1/fe881b5c02094390995ce8aaf7c99da3/cbe900b191ed48b5bcd3a2878b8059cb.jpg?imwidth=156",
  "https://img01.ztat.net/article/spp-media-p1/290bb64327674e7c86f18c5512f9b406/853cdb09743443c2b95a70125905416f.jpg?imwidth=156&filter=packshot",
  "Hannah jacket down",
  "",
  10000,
  10000,
  1,
  false,
  "Jaqueline is a statement jacket cut from a thin wool quality. The jacket has an oversized shape - inspired by the traditional aviator style, with a high collar and buckle detailing. The jacket has a hidden button closure and an oversized diagonal pocket in front. Style with Rose pants and a chunky sweater.",
  "black"
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

//let productArr: Products[] = [];

//skapar en funktion som lagrar produkterna
function toLocalStorage(productArr) {
  localStorage.setItem("product", JSON.stringify(productArr));
}

let cartQuanDiv: HTMLDivElement = document.createElement("div");
cartQuanDiv.className = "cartQuanStyle";
let cartQuantity: number = 0;



function printProducts() {
  let productContainer: HTMLElement =
    document.getElementById("productContainer");
  productContainer.innerHTML = "";


  for (let i: number = 0; i < productArr.length; i++) {
    let name: HTMLHeadingElement = document.createElement("h2");
    let sizeContainer: HTMLDivElement = document.createElement("div");
    let colorContainer: HTMLDivElement = document.createElement("div");
    let sizeS: HTMLButtonElement = document.createElement("button");
    let sizeM: HTMLButtonElement = document.createElement("button");
    let sizeL: HTMLButtonElement = document.createElement("button");
    let colorBlack: HTMLButtonElement = document.createElement("button");
    let colorSilver: HTMLButtonElement = document.createElement("button");
    let colorGreen: HTMLButtonElement = document.createElement("button");
    let img: HTMLImageElement = document.createElement("img");
    let img2: HTMLImageElement = document.createElement("img");
    let price: HTMLSpanElement = document.createElement("span");
    let btnDiv: HTMLDivElement = document.createElement("div");
    let infoBtn: HTMLButtonElement = document.createElement("button");
    let addToCartBtn: HTMLButtonElement = document.createElement("button");
    let productsDiv: HTMLDivElement = document.createElement("div");

    let cartBtn = document.getElementById("cartBtn");
    
    img.src = productArr[i].firstPicture;
    img2.src = productArr[i].secondPicture;
    name.innerHTML = productArr[i].name;
    sizeContainer.className = "sizeContainer";
    sizeContainer.innerText = "Size";
    colorContainer.className = "colorContainer";
    colorContainer.innerText = "Color";
    colorBlack.className = "blackBtn";
    colorSilver.className = "silverBtn";
    colorGreen.className = "greenBtn";

    sizeS.innerHTML = "S";
    sizeS.addEventListener("click", () => {
      productArr[i].size = "S";
      sizeS.className = "selectedSize";
      sizeM.className = "";
      sizeL.className = "";
    });

    sizeM.innerHTML = "M";
    sizeM.addEventListener("click", () => {
      productArr[i].size = "M";
      sizeM.className = "selectedSize";
      sizeS.className = "";
      sizeL.className = "";
      console.log(productArr);
    });

    sizeL.innerHTML = "L";
    sizeL.addEventListener("click", () => {
      productArr[i].size = "L";
      sizeL.className = "selectedSize";
      sizeS.className = "";
      sizeM.className = "";
    });

    colorBlack.addEventListener("click", () => {
      productArr[i].color = "black";
      colorBlack.id = "selectedColorBlack";
      colorSilver.id = "";
      colorGreen.id = "";
    });

    colorSilver.addEventListener("click", () => {
      productArr[i].color = "silver";
      colorSilver.id = "selectedColor";
      colorBlack.id = "";
      colorGreen.id = "";
    });

    colorGreen.addEventListener("click", () => {
      productArr[i].color = "green";
      colorGreen.id = "selectedColor";
      colorBlack.id = "";
      colorSilver.id = "";
    });

    img.src = productArr[i].firstPicture;
    img2.src = productArr[i].secondPicture;
    price.innerHTML = productArr[i].price.toString() + " £";
    addToCartBtn.innerHTML = "+";
    infoBtn.innerHTML = "i";

    productsDiv.appendChild(img);
    productsDiv.appendChild(img2);
    productsDiv.appendChild(name);
    productsDiv.appendChild(price);
    sizeContainer.appendChild(sizeS);
    sizeContainer.appendChild(sizeM);
    sizeContainer.appendChild(sizeL);
    productsDiv.appendChild(sizeContainer);
    colorContainer.appendChild(colorBlack);
    colorContainer.appendChild(colorSilver);
    colorContainer.appendChild(colorGreen);
    productsDiv.appendChild(colorContainer);
    btnDiv.appendChild(infoBtn);
    btnDiv.appendChild(addToCartBtn);
    productsDiv.appendChild(btnDiv);
    productContainer.appendChild(productsDiv);
    cartBtn.appendChild(cartQuanDiv);

    productContainer.className = "productContainerStyle";
    btnDiv.className = "btnDivStyle";
    infoBtn.className = "btnStyle";
    addToCartBtn.className = "cartBtnStyle";
    img.className = "firstImg";
    img2.className = "secondImg";

    if (productArr[i].cart === true) {
      addToCartBtn.innerHTML = "✓";
      addToCartBtn.className = "inCart";
      addToCartBtn.addEventListener("click", printCart);
    } else {
      addToCartBtn.addEventListener("click", () => {
        productArr[i].cart = true;
        addToCartBtn.addEventListener("click", printCart);
        addToCartBtn.innerHTML = "✓";
        addToCartBtn.className = "inCart";
        cartQuantity++;
        cartQuanDiv.innerHTML = "";
        cartQuanDiv.style.display = "block";
        cartQuanDiv.innerHTML = cartQuantity.toString();
      });
      if (cartQuantity === 0) {
        cartQuanDiv.style.display = "none";
      }
    }
  

    img.style.display = "block";
    img2.style.display = "none";

    img.onmouseover = function () {
      img.style.display = "none";
      img2.style.display = "block";
    };

    img2.onmouseout = function () {
      img.style.display = "block";
      img2.style.display = "none";
    };

    infoBtn.addEventListener("click", () => {
      detailClick(i);
    });
  }
  
}

function detailClick(position) {
  let name: HTMLHeadingElement = document.createElement("h2");
  let size: HTMLSpanElement = document.createElement("span");
  let img2: HTMLImageElement = document.createElement("img");
  let price: HTMLSpanElement = document.createElement("p");
  let infotext: HTMLSpanElement = document.createElement("span");
  let detailDiv: HTMLDivElement = document.createElement("div");
  let detailContainer: HTMLDivElement = document.getElementById(
    "cart-container"
  ) as HTMLDivElement;

  detailContainer.innerHTML = "";
  name.innerHTML = productArr[position].name;
  size.innerHTML = productArr[position].size;
  img2.src = productArr[position].secondPicture;
  infotext.innerHTML = productArr[position].detailText;
  price.innerHTML = productArr[position].price.toString() + " £";

  detailDiv.appendChild(img2);
  detailDiv.appendChild(name);
  detailDiv.appendChild(size);
  detailDiv.appendChild(price);
  detailDiv.appendChild(infotext);
  detailContainer.appendChild(detailDiv);

  handleClick();
}

function printCart() {
  let cartContainer: HTMLDivElement = document.getElementById(
    "cart-container"
  ) as HTMLDivElement;
  cartContainer.innerHTML = "";

  for (let i: number = 0; i < productArr.length; i++) {
    if (productArr[i].cart === true && productArr[i].size !== "") {
      let productDiv: HTMLDivElement = document.createElement("div");
      let productDetails: HTMLSpanElement = document.createElement("span");
      let name: HTMLHeadingElement = document.createElement("h2");
      let size: HTMLSpanElement = document.createElement("span");
      let color: HTMLSpanElement = document.createElement("span");
      let img2: HTMLImageElement = document.createElement("img");
      let totalPrice: HTMLSpanElement = document.createElement("span");
      let quantityContainer: HTMLDivElement = document.createElement("div");
      let quantity: HTMLSpanElement = document.createElement("span");
      let plusBtn: HTMLButtonElement = document.createElement("button");
      let minusBtn: HTMLButtonElement = document.createElement("button");
      let removeBtn: HTMLButtonElement = document.createElement("button");

      let qtyDisplay: HTMLDivElement = document.createElement("div");
      let productDisplay: HTMLDivElement = document.createElement("div");
      let priceDisplay: HTMLDivElement = document.createElement("div");
      let softDisplay: HTMLDivElement = document.createElement("div");

      plusBtn.addEventListener("click", () => {
        addQuantity(i);
        calculatePrice(i);
        printCart();
        toLocalStorage(productArr);
      });

      minusBtn.addEventListener("click", () => {
        subtractQuantity(i);
        calculatePrice(i);
        printCart();
        toLocalStorage(productArr);
      });

      name.innerHTML = productArr[i].name;
      size.innerHTML = "Size: " + productArr[i].size;
      color.innerHTML = "Color: " + productArr[i].color;
      img2.src = productArr[i].secondPicture;
      totalPrice.innerHTML =
        "<p>Total: </p>" + productArr[i].totalPrice.toString() + " £";
      quantity.innerHTML = productArr[i].quantity.toString();
      removeBtn.innerHTML = '<i class="fas fa-times"></i>';
      removeBtn.className = "removeBtn";
      plusBtn.innerHTML = '<i class="fas fa-plus"></i>';
      minusBtn.innerHTML = '<i class="fas fa-minus"></i>';
      qtyDisplay.innerHTML = '<p>qty</p>';
      productDisplay.innerHTML = "<p>product</p>";
      quantityContainer.className = "quantityContainer";
      productDetails.className = "productSpec";
      qtyDisplay.className = "qtyDisplay";
      priceDisplay.className = "priceDisplay";
      productDisplay.className = "productDisplay";
      softDisplay.className = "softDisplay";
      minusBtn.className = "minusBtn";
      plusBtn.className = "plusBtn";

      removeBtn.addEventListener("click", () => {
        removeCartItem(i);
      });

      productDisplay.appendChild(name);
      productDisplay.appendChild(img2);
      productDetails.appendChild(size);
      productDetails.appendChild(color);
      priceDisplay.appendChild(totalPrice);
      productDiv.appendChild(productDetails);
      softDisplay.appendChild(minusBtn);
      softDisplay.appendChild(quantity);
      softDisplay.appendChild(plusBtn);
      softDisplay.appendChild(removeBtn);
      productDiv.appendChild(quantityContainer);

      cartContainer.appendChild(productDiv);
      
      quantityContainer.appendChild(priceDisplay);
      quantityContainer.appendChild(qtyDisplay);
      quantityContainer.appendChild(productDisplay);
      qtyDisplay.appendChild(softDisplay);
    }
  }
  if (cartContainer.innerHTML == "") {
    let emptyDiv: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
    let emptyMsg: HTMLParagraphElement = document.createElement(
      "p"
    ) as HTMLParagraphElement;
    let sadSmiley: HTMLSpanElement = document.createElement(
      "span"
    ) as HTMLSpanElement;

    emptyMsg.innerHTML = "Your cart is empty";
    sadSmiley.innerHTML = '<i class="far fa-frown"></i>';

    emptyDiv.className = "emptyDivStyle";
    emptyMsg.className = "emptyMsgStyle";
    sadSmiley.className = "smileyStyle";

    cartContainer.appendChild(emptyDiv);
    emptyDiv.appendChild(emptyMsg);
    emptyDiv.appendChild(sadSmiley);
  } else {
    let cartBtnContainer: HTMLDivElement = document.createElement("div");
    let continueShopping: HTMLButtonElement = document.createElement("button");
    let goToCheckOut: HTMLButtonElement = document.createElement("button");
    let checkoutLink: HTMLAnchorElement = document.createElement("a");

    goToCheckOut.innerHTML = "Go to Checkout";
    checkoutLink.href = "./checkout.html";
    continueShopping.innerHTML = "Continue Shopping";
    continueShopping.addEventListener("click", () => {
      modal.style.display = "none";
    });
    cartBtnContainer.id = "cartBtns";

    checkoutLink.appendChild(goToCheckOut);
    cartBtnContainer.appendChild(checkoutLink);
    cartBtnContainer.appendChild(continueShopping);
    cartContainer.appendChild(cartBtnContainer);

    toLocalStorage(productArr);
    /*else {
      let emptyMsg: HTMLParagraphElement = document.createElement(
        "p"
      ) as HTMLParagraphElement;
      emptyMsg.innerHTML = "Your cart is empty";
      cartContainer.appendChild(emptyMsg);
    }*/
  }
  handleClick();
}

function addQuantity(position) {
  productArr[position].quantity += 1;
  return productArr[position].quantity;
}

function subtractQuantity(position) {
  productArr[position].quantity -= 1;
  if (productArr[position].quantity === 0) {
    productArr[position].quantity = 1;
  } else return productArr[position].quantity;
}

function calculatePrice(position) {
  productArr[position].totalPrice =
    productArr[position].price * productArr[position].quantity;
  return productArr[position].totalPrice;
}

function removeCartItem(position) {
  productArr[position].quantity = 1;
  calculatePrice(position);
  cartQuantity--;
  console.log(cartQuantity);
  cartQuanDiv.innerHTML = "";
  cartQuanDiv.style.display = "block";
  cartQuanDiv.innerHTML = cartQuantity.toString();
  productArr[position].cart = false;

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  printProducts();
  printCart();
}

/*function fetchAndPrintData() {
  fetch("https://dark-sky.p.rapidapi.com/59.3293,18.0686?units=auto&lang=en", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "dark-sky.p.rapidapi.com",
      "x-rapidapi-key": "24a44dd15emsh4566a472b62617ap1e4e9fjsn6119876c45be",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.currently.temperature);

      let temp: HTMLHeadingElement = document.getElementById(
        "temp"
      ) as HTMLHeadingElement;
      temp.innerHTML =
        "Current temperature:  " +
        Math.round(data.currently.temperature) +
        " °C";
    })
    .catch((err) => {
      console.error(err);
    });
} */

var modal = document.getElementById("productModal") as HTMLDivElement;

let spanis = document.getElementsByClassName("disappear")[0] as HTMLSpanElement;

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
