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

    //skapar plus/minus-knapp
    let plusBtn: HTMLButtonElement = document.createElement("button");
    let minusBtn: HTMLButtonElement = document.createElement("button");
    plusBtn.innerHTML = "+";
    minusBtn.innerHTML = "-";
    plusBtn.className = "editBtn";
    minusBtn.className = "editBtn";

    //skapar klickhändelse för +/- knapparna
    plusBtn.addEventListener("click", () => {
      addQuantity(i);
      calculateTotalPrice(i);
      printsummary();
    });
    minusBtn.addEventListener("click", () => {
      subtractQuantity(i);
      calculateTotalPrice(i);
      printsummary();
    });

    //lägger till innehåll i celler från arrayn
    cell1.innerHTML += productsInCart[i].name;
    cell2.innerHTML += productsInCart[i].quantity;
    cell3.appendChild(plusBtn);
    cell3.appendChild(minusBtn);
    cell4.innerHTML += productsInCart[i].size;
    cell5.innerHTML += productsInCart[i].price + " £";
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

    amountDiv.innerHTML = totalAmount.toString() + " £";
  }
}

function showModal(event) {
  checkoutModal.style.display = "block";
  event.preventDefault();
}

let form = document.getElementById("form");
form.addEventListener("submit", showModal);

let checkoutModal = document.getElementById("checkoutModal") as HTMLDivElement;

window.onclick = function (event) {
  if (event.target == checkoutModal) {
    checkoutModal.style.display = "block";
  }
};
