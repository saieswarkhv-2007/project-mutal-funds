
alert("Welcome to Top Mutual Funds Page");


const cards = document.querySelectorAll(".card");


cards.forEach(function (card) {
  card.addEventListener("click", function () {
    alert("Opening fund details");
    card.style.backgroundColor = "#e0f7fa";
  });
});