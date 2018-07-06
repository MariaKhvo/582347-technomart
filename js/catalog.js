var catalogList = document.querySelector(".catalog-list");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");

catalogList.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(evt.target.classList.contains("buy")) {
    cartPopup.classList.add("modal-show");
  }
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});