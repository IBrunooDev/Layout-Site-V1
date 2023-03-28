// seleciona o elemento HTML que contém o texto a ser animado
var text = document.getElementById("text");

// converte o texto em uma array de caracteres
var chars = text.innerHTML.split("");

// remove o texto original
text.innerHTML = "";

// cria um intervalo de tempo (em milissegundos) entre cada caracter
var interval = 100;

// itera pela array de caracteres e adiciona cada um ao elemento HTML com um atraso de intervalo
for (var i = 0; i < chars.length; i++) {
  setTimeout(function() {
    text.innerHTML += chars.shift();
  }, i * interval);
}
