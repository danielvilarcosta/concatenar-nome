// Seleciona o formulário
let formulario = document.getElementById("formulario");

// Adiciona um evento de envio ao formulário
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  // Obtém os valores do primeiro nome e sobrenome
  let primeiroNome = document.getElementById("primeiroNome").value;
  let sobrenome = document.getElementById("sobrenome").value;

  // Concatena os nomes
  let nomeCompleto = primeiroNome + " " + sobrenome;

  // Exibe o nome completo na tela
  document.getElementById("resultado").innerHTML =
    "Nome completo: " + nomeCompleto;
});
