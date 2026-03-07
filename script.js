const Email = document.getElementById("email");
const Password = document.getElementById("password");

function logIn() {
  if (Email.value === "admin" && Password.value === "admin123") {
    window.location.href = "main.html";
  } else {
    alert("wrong credentials");
  }
}
