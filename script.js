
const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura !== '' && peso !== '') {
         
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = "";
        if (valorIMC < 18.5){
            classificacao = 'Atenção ! Abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'Seu peso ideal. Parabéns !';
        } else if (valorIMC < 30) {
            classificacao = 'Você está levemente acima do peso.';
        } else if (valorIMC < 35){
            classificacao = 'Obesidade Grau I';
        } else if (valorIMC < 40) {
            classificacao = 'Obesidade Grau II';
        } else {
            classificacao = 'Obesidade mórbida. CUIDADO !'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}. Você está ${classificacao}`;
    } else {
        resultado.textContent = 'PREENCHA TODOS OS CAMPOS !'
    }
    
}

calcular.addEventListener('click', imc);