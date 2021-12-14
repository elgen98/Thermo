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

function confirm() {
  let thankyoumodal: HTMLDivElement = document.getElementById(
    "cart-container"
  ) as HTMLDivElement;
  event.preventDefault();
  showModal();
}

let retrievedProducts = JSON.parse(localStorage.getItem("product"));
console.log(retrievedProducts);
function printsummary() {
  for (let i: number = 0; i < retrievedProducts.length; i++) {
    if (retrievedProducts[i].cart === true) {
      let table = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];

      let newRow = table.insertRow();
      let cell1 = newRow.insertCell();
      let cell2 = newRow.insertCell();
      let cell3 = newRow.insertCell();
      let cell4 = newRow.insertCell();
      let cell5 = newRow.insertCell();

      let plusBtn: HTMLButtonElement = document.createElement("button");
      plusBtn.innerHTML = "+";

      let minusBtn: HTMLButtonElement = document.createElement("button");
      minusBtn.innerHTML = "-";
      cell3.appendChild(plusBtn);
      cell3.appendChild(minusBtn);

      cell1.innerHTML += retrievedProducts[i].name;
      cell2.innerHTML += retrievedProducts[i].quantity;

      cell4.innerHTML += retrievedProducts[i].size;
      cell5.innerHTML += retrievedProducts[i].price;
    }
  }
  printTotal();
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

let modal = document.getElementById("checkoutModal") as HTMLDivElement;

let spanis = document.getElementsByClassName("disappear")[0] as HTMLSpanElement;

function showModal() {
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
