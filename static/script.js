document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("status").textContent = "Dados preenchidos. Conecte este formulário ao seu sistema de autenticação.";
});