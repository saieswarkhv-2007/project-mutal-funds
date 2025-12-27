
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert(this.innerText + " clicked");
    });
  });

  
  document.querySelector(".home-btn").addEventListener("click", function () {
    window.location.href = "homepage.html";
  });
