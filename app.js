let texto3 = (document.getElementById("texto3").style.display = "none");
let botao3 = (document.getElementById("botao3").style.display = "none");
let novoTexto = "";
let texto = "";
let textocriptografado = "";
let novoTexto2 = "";
let textoCopiado;

function criptografia() {
  texto = document.querySelector("#texto").value;
  novoTexto = texto;
  if (texto.includes("e") == true) {
    novoTexto = novoTexto.replace("e", "enter");
  }
  if (texto.includes("i") == true) {
    novoTexto = novoTexto.replace("i", "imes");
  }
  if (texto.includes("a") == true) {
    novoTexto = novoTexto.replace("a", "ai");
  }
  if (texto.includes("o") == true) {
    novoTexto = novoTexto.replace("o", "ober");
  }
  if (texto.includes("u") == true) {
    novoTexto = novoTexto.replace("u", "ufat");
  }
  return novoTexto;
}
function descriptografia() {
  textocriptografado = document.querySelector("#texto").value;
  novoTexto2 = textocriptografado;
  if (textocriptografado.includes("enter") == true) {
    novoTexto2 = novoTexto2.replace("enter", "e");
  }
  if (textocriptografado.includes("imes") == true) {
    novoTexto2 = novoTexto2.replace("imes", "i");
  }
  if (textocriptografado.includes("ai") == true) {
    novoTexto2 = novoTexto2.replace("ai", "a");
  }
  if (textocriptografado.includes("ober") == true) {
    novoTexto2 = novoTexto2.replace("ober", "o");
  }
  if (textocriptografado.includes("ufat") == true) {
    novoTexto2 = novoTexto2.replace("ufat", "u");
  }
  return novoTexto2;
}

function mensagem() {
  let imagem = document.getElementById("imagem").style.display;
  let texto1 = document.getElementById("texto1").style.display;
  let texto2 = document.getElementById("texto2").style.display;
  if (texto != "" || textocriptografado != "") {
    imagem = document.getElementById("imagem").style.display = "none";
    texto2 = document.getElementById("texto1").style.display = "none";
    texto2 = document.getElementById("texto2").style.display = "none";
    texto3 = document.getElementById("texto3").style.display = "block";
    botao3 = document.getElementById("botao3").style.display = "block";
  } else {
    imagem = document.getElementById("imagem").style.display = "block";
    texto1 = document.getElementById("texto1").style.display = "block";
    texto2 = document.getElementById("texto2").style.display = "block";
    texto3 = document.getElementById("texto3").style.display = "none";
    botao3 = document.getElementById("botao3").style.display = "none";
  }
}
function criptografar() {
  criptografia();
  let titulo = document.querySelector("#texto3");
  titulo.innerHTML = novoTexto;
  document.getElementById("texto").value = "";
  mensagem();
  textoCopiado = 1;
}
function descriptografar() {
  descriptografia();
  let titulo = document.querySelector("#texto3");
  titulo.innerHTML = novoTexto2;
  document.getElementById("texto").value = "";
  mensagem();
  textoCopiado = 2;
}

function copiar(){
  if(textoCopiado == 1){
    navigator.clipboard.writeText(novoTexto);
  } else{
    navigator.clipboard.writeText(novoTexto2);

  }
  
}
