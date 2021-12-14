window.onload = function () {
  document.getElementById("cardType").addEventListener("change", addCardForm);
  document.getElementById("confirmorderBtn").addEventListener("click", confirm);
  printsummary();
};

function addCardForm() {
  let cardItems = document.getElementsByClassName("cardInfoHidden");
  for (let i = cardItems.length - 1; i >= 0; --i) {
    cardItems[i].className = "cardInfoShow";
  }
}

let retrievedProducts = JSON.parse(localStorage.getItem("product"));

function printsummary() {
  let table = document.getElementById("table").getElementsByTagName("tbody")[0];

  table.innerHTML = " ";
  for (let i: number = 0; i < retrievedProducts.length; i++) {
    if (retrievedProducts[i].cart === true) {
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
      cell1.innerHTML += retrievedProducts[i].name;
      cell2.innerHTML += retrievedProducts[i].quantity;
      cell3.appendChild(plusBtn);
      cell3.appendChild(minusBtn);
      cell4.innerHTML += retrievedProducts[i].size;
      cell5.innerHTML += retrievedProducts[i].price;
    }
  }
  printTotal();
}

function addQuantity(position) {
  retrievedProducts[position].quantity += 1;
  return retrievedProducts[position].quantity;
}

function subtractQuantity(position) {
  retrievedProducts[position].quantity -= 1;
  if (retrievedProducts[position].quantity === 0) {
    retrievedProducts[position].quantity = 1;
  } else return retrievedProducts[position].quantity;
}

function calculateTotalPrice(position) {
  retrievedProducts[position].totalPrice =
    retrievedProducts[position].price * retrievedProducts[position].quantity;
  return retrievedProducts[position].totalPrice;
}

function printTotal() {
  let totalAmount: number = 0;
  let amountDiv = document.getElementById("amountDiv") as HTMLDivElement;
  for (let i: number = 0; i < retrievedProducts.length; i++) {
    if (retrievedProducts[i].cart === true) {
      totalAmount += retrievedProducts[i].totalPrice;

      amountDiv.innerHTML = totalAmount.toString();
    }
  }
}

function showCheckoutModal() {
  let checkoutModal = document.getElementById(
    "checkoutModal"
  ) as HTMLDivElement;
  let confirmBtn = document.getElementById(
    "confirmorderBtn"
  ) as HTMLButtonElement;
}
