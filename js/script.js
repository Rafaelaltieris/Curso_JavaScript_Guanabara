function obterDados(opt) {
    switch (opt) {
      case "errorResult": {
        return {
          error: document.getElementById("erro"),
          result: document.getElementById("resultado"),
        };
      }
      case "numero": {
        return {
          numero: document.getElementById("num").value,
          error: document.getElementById("erro"),
          result: document.getElementById("resultado"),
        };
      }
      case "num1": {
        return {
          num1: document.getElementById("num1").value,
          error: document.getElementById("erro"),
          result: document.getElementById("resultado"),
        };
      }
      case "num1,2": {
        return {
          num1: document.getElementById("num1").value,
          num2: document.getElementById("num2").value,
          error: document.getElementById("erro"),
          result: document.getElementById("resultado"),
        };
      }
      case "resp": {
        return {
          resp: document.getElementById("resposta"),
        };
      }
      case "palavra": {
        return {
          palavra: document.getElementById("palavra").value,
          error: document.getElementById("erro"),
          result: document.getElementById("resultado"),
        };
      }
      case "hello": {
        return {
          hello: document.getElementById("hello").value,
          error: document.getElementById("erro"),
          result: document.getElementById("resultado"),
        };
      }
    }
  }
  
function exibirResultado(dados) {
    dados.result.style.display = "block";
    dados.error.style.display = "none";
  }
  
function exibirError(dados) {
    dados.result.style.display = "none";
    dados.error.style.display = "block";
}

function exercicio1() {
  let resp = document.getElementById("resposta");
  resp.innerHTML = "<h2>Resposta da Atividade</h2>";
  // resp.innerHTML += "Hello World";

  let hello = document.getElementById("hello").value;
  resp.innerHTML += `${hello}`;
}

function exercicio2() {
  let resp = document.getElementById("resposta");
  resp.innerHTML = "<h2> Resposta da Atividade</h2>"

  let nome = document.getElementById("nome").value;
  resp.innerHTML += `Seu nome é ${nome}`;
}

function exercicio3() {
  let resp = document.getElementById("resposta");
  resp.innerHTML = "<h2>Resposta da atividade</h2>";

  let idade = document.getElementById("idade").value;
  resp.innerHTML += `Sua idade é ${idade}`;
}

function exercicio4() {
  let resp = document.getElementById("resposta");
  resp.innerHTML = "<h2>Resposta da atividade</h2>";

  let numero = document.getElementById("numero").value;
  resp.innerHTML += `O dobro de ${numero} é ${numero * 2} e sua metade é ${numero / 2}`;

}