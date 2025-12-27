window.onload = function () {
  alert("Welcome to Mutual Fund Portal!");
};


  function changeColor() {
    document.querySelector(".hero h1").style.color = "yellow";
    alert("Color changed!");

    setTimeout(function () {
      window.location.href = "fundlist.html";
    }, 1500);
  }

