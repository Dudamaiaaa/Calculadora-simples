let valorAtual = "0";
let valorAnterior = "";
let operadorEscolhido = null;

const display = document.getElementById("display");
const botoes = document.querySelectorAll("button");

function atualizarDisplay() {
  display.value = valorAtual;
}

function adicionarNumero(numero) {
  if (numero === "." && valorAtual.includes(".")) return;

  if (valorAtual === "0" && numero !== ".") {
    valorAtual = numero;
  } else {
    valorAtual = valorAtual + numero;
  }
}