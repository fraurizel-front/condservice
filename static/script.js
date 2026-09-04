const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const username = formData.get("username").trim().toLowerCase();
  const password = formData.get("password");
  const status = document.getElementById("status");

  if (username === "admin@condominio.com" && password === "123456") {
    sessionStorage.setItem("condServiceAuthenticated", "true");
    window.location.href = "dashboard.html";
    return;
  }

  status.textContent = "E-mail ou senha incorretos.";
  status.classList.add("error");
});