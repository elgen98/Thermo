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
      let newCell = newRow.insertCell();

      newCell.innerHTML += retrievedProducts[i].name;
      newCell.innerHTML += retrievedProducts[i].quantity;
      newCell.innerHTML += retrievedProducts[i].price;
      newCell.innerHTML += retrievedProducts[i].size;

      tr.appendChild(dataName);
      tr.appendChild(dataQty);
      tr.appendChild(dataPrice);
      tr.appendChild(dataSize);
      table.appendChild(tr);
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
