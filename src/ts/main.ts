window.onload = function () {
  document.getElementById("cardType").addEventListener("click", doSomething);
};
function doSomething() {
  let cardItems = document.getElementsByClassName("cardInfoHidden");
  for (let i: number = 0; i < cardItems.length; i++) {
    cardItems[i].className = "cardInfoShow";
  }
}
