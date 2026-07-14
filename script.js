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

function limpar() {
  valorAtual = "0";
  valorAnterior = "";
  operadorEscolhido = null;
}

function apagarUltimo() {
  valorAtual = valorAtual.toString().slice(0, -1);
  if (valorAtual === "" || valorAtual === "-") {
    valorAtual = "0";
  }
}

function escolherOperador(operador) {
  if (valorAnterior !== "") {
    calcular();
  }
  operadorEscolhido = operador;
  valorAnterior = valorAtual;
  valorAtual = "0";
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function calcular() {
  const anterior = parseFloat(valorAnterior);
  const atual = parseFloat(valorAtual);

  if (isNaN(anterior) || isNaN(atual) || operadorEscolhido === null) return;

  let resultado;

  switch (operadorEscolhido) {
    case "+":
      resultado = somar(anterior, atual);
      break;
    case "-":
      resultado = subtrair(anterior, atual);
      break;
    case "*":
      resultado = multiplicar(anterior, atual);
      break;
    case "/":
      resultado = dividir(anterior, atual);
      break;  
    default:
      return;
  }

  valorAtual = resultado.toString();
  operadorEscolhido = null;
  valorAnterior = "";
}

function adicionarNumero(numero) {
  // Impede múltiplos pontos decimais no mesmo número
  if (numero === "." && valorAtual.includes(".")) return;

  if (valorAtual === "0" && numero !== ".") {
    valorAtual = numero;
  } else {
    valorAtual = valorAtual + numero;
  }
  
}
function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}