const Email = document.getElementById("email");
const Password = document.getElementById("password");

function logIn() {
  if (Email.value === "admin" && Password.value === "admin123") {
    window.location.href = "main.html";
  } else {
    alert("wrong credentials");
  }
}

if (performance.getEntriesByType("navigation")[0].type === "reload") {
  window.location.href = "index.html";
}
