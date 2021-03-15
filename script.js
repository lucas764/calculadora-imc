const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  altura = document.getElementById("altura").value;
  peso = document.getElementById("peso").value;
  resultado = document.getElementById("resultado");
  //verificaçao de campos vazios
  if (nome !== "" && altura !== "" && peso !== "") {
    //calculo q deve ser executado pela funçao
    const valorIMC = (peso / (altura * altura)).toFixed(1); //tofixed para aredondar o valor em casas decimais

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal. Parabéns!!!";
    } else if (valorIMC < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificacao = "com obesidade grau II";
    } else {
      classificacao = "com obesidade grau III. Cuidado!!";
    }
    // pegando conteudo dentro da div textContent
    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
  } else {
    //se os campos estiverem vazios
    resultado.textContent = "Preencha todos os campos!!!";
  }
}
calcular.addEventListener("click", imc);