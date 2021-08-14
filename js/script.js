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

