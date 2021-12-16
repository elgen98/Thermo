window.onload = function () {
  document.getElementById("cardType").addEventListener("change", addCardForm);

  printsummary();
};

function addCardForm() {
  let cardItems = document.getElementsByClassName("cardInfoHidden");
  for (let i = cardItems.length - 1; i >= 0; --i) {
    cardItems[i].className = "cardInfoShow";
  }
}

let productsInCart = JSON.parse(localStorage.getItem("product"));
console.log(productsInCart);

//hämtar cartQuantity produkter
let cartQuantity: number;
cartQuantity = JSON.parse(localStorage.getItem("cartQuantity"));

//skapar en funktion som uppdaterar "product"
function setCheckoutCart() {
  localStorage.setItem("product", JSON.stringify(productsInCart));
}

//skapar en funktion som uppdaterar "quantity"
function setCheckoutQuantity() {
  localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
}

function printsummary() {
  let table = document.getElementsByTagName("tbody")[0];

  table.innerHTML = " ";
  for (let i: number = 0; i < productsInCart.length; i++) {
    //skapar table med rows och cells i js
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();
    let cell3 = newRow.insertCell();
    let cell4 = newRow.insertCell();
    let cell5 = newRow.insertCell();

    //skapar plus/minus och tabort-knapp
    let plusBtn: HTMLButtonElement = document.createElement("button");
    let minusBtn: HTMLButtonElement = document.createElement("button");
    let deleteBtn: HTMLButtonElement = document.createElement("button");
    plusBtn.innerHTML = "+";
    minusBtn.innerHTML = "-";
    deleteBtn.innerHTML = "x";
    plusBtn.className = "editBtn";
    minusBtn.className = "editBtn";
    deleteBtn.className = "editBtn";

    //skapar klickhändelse för +/- knapparna
    plusBtn.addEventListener("click", () => {
      addQuantity(i);
      calculateTotalPrice(i);
      printsummary();
      setCheckoutCart();
    });
    minusBtn.addEventListener("click", () => {
      subtractQuantity(i);
      calculateTotalPrice(i);
      printsummary();
      setCheckoutCart();
    });

    //skapar klickhändelse för tabortknapp
    deleteBtn.addEventListener("click", () => {
      removeCartItem(i);
      setCheckoutCart();
    });

    //lägger till innehåll i celler från arrayn
    cell1.innerHTML += productsInCart[i].name;
    cell2.innerHTML += productsInCart[i].quantity;
    cell3.appendChild(minusBtn);
    cell3.appendChild(plusBtn);
    cell3.appendChild(deleteBtn);
    cell4.innerHTML += productsInCart[i].size;
    cell5.innerHTML += productsInCart[i].price + " kr";
  }

  printTotal();
}

function addQuantity(position) {
  productsInCart[position].quantity += 1;
  return productsInCart[position].quantity;
}

function subtractQuantity(position) {
  productsInCart[position].quantity -= 1;
  if (productsInCart[position].quantity === 0) {
    productsInCart[position].quantity = 1;
  } else return productsInCart[position].quantity;
}

function removeCartItem(position) {
  productsInCart[position].quantity = 1;
  productsInCart.splice(position, 1);
  cartQuantity = productsInCart.length;
  if (productsInCart.length === 0) {
    let maincon = document.getElementById("maincontainer") as HTMLDivElement;
    maincon.innerHTML = "";
    let emptyDiv = document.createElement("div") as HTMLDivElement;
    emptyDiv.className = "emptyDiv";
    emptyDiv.innerHTML = "Your cart is empty!";

    let moreBtn = document.createElement("button") as HTMLButtonElement;
    moreBtn.innerHTML = "Back to shop";
    moreBtn.id = "moreBtnStyle";
    moreBtn.addEventListener("click", shopmore);

    maincon.appendChild(emptyDiv);
    emptyDiv.appendChild(moreBtn);
  }
  setCheckoutQuantity();
  printsummary();
}

function calculateTotalPrice(position) {
  productsInCart[position].totalPrice =
    productsInCart[position].price * productsInCart[position].quantity;
  return productsInCart[position].totalPrice;
}

function printTotal() {
  let totalAmount: number = 0;
  let amountDiv = document.getElementById("amountDiv") as HTMLDivElement;
  for (let i: number = 0; i < productsInCart.length; i++) {
    totalAmount += productsInCart[i].totalPrice;
    if (totalAmount === 0) {
      document.getElementById("summaryDiv").innerHTML = "";
    } else {
      amountDiv.innerHTML = totalAmount.toString() + " kr";
    }
  }
}

function shopmore() {
  localStorage.clear();
  document.location.href = "./products.html";
}

function showModal(event) {
  checkoutModal.style.display = "block";
  event.preventDefault();
  localStorage.clear();
}

let form = document.getElementById("form");
form.addEventListener("submit", showModal);

let checkoutModal = document.getElementById("checkoutModal") as HTMLDivElement;

window.onclick = function (event) {
  if (event.target == checkoutModal) {
    checkoutModal.style.display = "block";
  }
};
