/*
O IMC - Índice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de pesa de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 = Peso normal;
- Entre 25 e 30 = Acima do peso;
- Entre 30 e 40 = Obeso;
- Acima de 40 = Obesidade Grave;
*/

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(IMC) {
    if (IMC < 18.5) {
        return 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC <= 25) {
        return 'Peso normal';
    } else if (IMC >= 25 && IMC <= 30) {
        return 'Acima do peso';
    } else if (IMC >= 30 && IMC <= 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

function main() {    
    const peso = 71.5;
    const altura = 1.71;

    const IMC = calcularIMC(peso, altura);
    console.log(classificarImc(IMC));
}

main();

/*
const main2 = main;

main2();

Exibe o mesmo valor, este comentário serve para demonstrar que podemos usar uma const para 
invocar uma função anterior, e chamar essa const no lugar da função propriamente dita.

Função imediatamente invocada:

(function main() {
    parâmentros da função
})();

Nesta função ela é automaticamente executada. Não podemos fazer referência a ela fora dela, há outra
notação para ela (função não nomeada), veja abaixo:

(function () {
    parâmetros da função
})();
*/
