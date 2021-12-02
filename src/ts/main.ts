window.onload = function () {
  document.getElementById("cardType").addEventListener("change", doSomething);
};
function doSomething() {
  let cardItems = document.getElementsByClassName("cardInfoHidden");
  for (let i = cardItems.length - 1; i >= 0; --i) {
    cardItems[i].className = "cardInfoShow";
  }
}
