var link = document.querySelector(".message");
var popup = document.querySelector(".modal-message");
var close = popup.querySelector(".modal-close");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  console.log("Клик по ссылке")
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

var popularList = document.querySelector(".popular-list");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");

popularList.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(evt.target.classList.contains("buy")) {
    cartPopup.classList.add("modal-show");
  }
});
cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});
