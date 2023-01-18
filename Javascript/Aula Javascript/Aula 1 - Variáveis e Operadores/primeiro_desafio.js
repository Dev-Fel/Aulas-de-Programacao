/* Faça um programa para calcular o valor gasto em uma viagem.

Você terá 3 variáveis. Sendo elas:
- 1 Preço do combustível;
- 2 Gasto médio de combustível do carro por KM;
- 3 Distância em Km da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

console.log('Será gasto em R$:');

const precoCombustivel = 5.79;
const KmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / KmPorLitro;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
