


const camisetaRenanAzul = true;
const camisetaLemaoAzul = false;

const Numero = 0;

const isNumeroDivisivelPor5 = (Numero % 5) === 0;

console.log (isNumeroDivisivelPor5);

if (Numero === 0) {
    console.log ('O número é inválido')
} else if (isNumeroDivisivelPor5) {
    console.log ('É divisível')
} else console.log ('Não é divisível')
