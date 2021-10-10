const form = document.querySelector('#formulario');
const alturaForm = form.querySelector('#input-altura');
const pesoForm = form.querySelector('#input-peso');
const resultado = document.querySelector('.resultado');

function recebeEventoForm(evento) {
    evento.preventDefault();

    const altura = Number(alturaForm.value);
    const peso = Number(pesoForm.value);
    let resultadoImc

    function checkNaN(numero) {
        if (isNaN(numero)) {
            return false 
        } else {
            return checkInt(numero)
        }
    }
    
    function checkInt(numInt) {
        if (Number.isInteger(numInt)) {
            return numInt
        } else {
            return numInt * 10
        }
    }    

    function calcImc(num1, num2) {
        if (checkNaN(num1) && checkNaN(num2)){
            resultadoImc = num2 / num1 ** 2;
            return checkImc(resultadoImc)
        } else if (!checkNaN(num1)) {
            return resultado.innerHTML = `<p class="red"> Altura inválida. </p>`
        } else if (!checkNaN(num2)) {
            return resultado.innerHTML = `<p class="red">  Peso inválido. </p>`
        } else {
            return resultado.innerHTML = `<p class="red"> Algo deu errado! Tente novamente. </p>`
        }
    } 

    function checkImc(valorImc) {
        if (valorImc <= 18.5) {
            return resultado.innerHTML = `<p class="yellow"> O Resultado do seu IMC é: ${valorImc.toFixed(2)} e está abaixo do peso. </p>`
        } else if (valorImc >= 18.5 && valorImc <= 24.9) {
            return resultado.innerHTML = `<p class="green"> O Resultado do seu IMC é: ${valorImc.toFixed(2)} e seu peso está normal. </p>`
        } else if (valorImc >= 25 && valorImc <= 29.9) {
            return resultado.innerHTML = `<p class="orange"> O Resultado do seu IMC é: ${valorImc.toFixed(2)} e está em sobrepeso. </p>`
        } else if (valorImc >= 30 && valorImc <= 34.9) {
            return resultado.innerHTML = `<p class="coral"> O Resultado do seu IMC é: ${valorImc.toFixed(2)} e está apresentando Obesidade de grau 1. </p>`
        } else if (valorImc >= 35 && valorImc <= 39.9) {
            return resultado.innerHTML = `<p class="coral"> O Resultado do seu IMC é: ${valorImc.toFixed(2)} e está apresentando Obesidade de grau 2. </p>` 
        } else if (valorImc >= 40) {
            return resultado.innerHTML = `<p class="coral"> O Resultado do seu IMC é: ${valorImc.toFixed(2)} e está apresentando Obesidade de grau 3. </p>`
        }
    }

    calcImc(altura, peso);

}
form.addEventListener('submit', recebeEventoForm);
