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
      let summaryDiv = document.getElementById("summaryDiv") as HTMLDivElement;
      let prodname = document.getElementById("namediv") as HTMLDivElement;
      let qty = document.getElementById("qtydiv") as HTMLDivElement;
      let price = document.getElementById("pricediv") as HTMLDivElement;
      let size = document.getElementById("sizediv") as HTMLDivElement;

      prodname.innerHTML = retrievedProducts[i].name;
      qty.innerHTML = retrievedProducts[i].quantity;
      price.innerHTML = retrievedProducts[i].price;
      size.innerHTML = retrievedProducts[i].size;

      summaryDiv.appendChild(prodname);
      summaryDiv.appendChild(qty);
      summaryDiv.appendChild(price);
      summaryDiv.appendChild(size);

      console.log(retrievedProducts[i].name);
    }
  }
  printTotal();
}

function printTotal() {
  let amountDiv = document.getElementById("amountDiv") as HTMLDivElement;
  for (let i: number = 0; i < retrievedProducts.length; i++) {
    if (retrievedProducts[i].cart === true) {
      let totalAmount = retrievedProducts[i].totalPrice;

      amountDiv.innerHTML = totalAmount.toString();
      console.log(totalAmount.toString());
      console.log(retrievedProducts[i]);
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
