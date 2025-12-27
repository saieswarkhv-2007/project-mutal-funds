
const form = document.querySelector("form");


form.addEventListener("submit", function (event) {
  const firstName = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  if (firstName === "" || email === "") {
    alert("Please fill all required fields!");
    event.preventDefault(); 
  } else {
    alert("Registration Successful!");
  }
});