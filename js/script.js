// Adding color to all h2 Element
const h2Collection = document.getElementsByTagName("h2");
for (const h2 of h2Collection) {
  h2.style.color = "coral";
}

// Adding border radius to all the cards
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "10px";
}

// Adding Eventlistener to buy now button and showing added to cart
const buyNow = document.getElementsByClassName("btn-buy-now");
for (const button of buyNow) {
  button.addEventListener("click", function () {
    button.innerText = "Added to cart";
    button.setAttribute("disabled", true);
    button.style.backgroundImage =
      "linear-gradient(to bottom, #f882b1 0%, #fa79ab 100%)";
  });
}
