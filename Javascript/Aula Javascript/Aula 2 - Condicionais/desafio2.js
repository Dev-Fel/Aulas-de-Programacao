

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitro = 10;
const tipoCombustivel = 'Alcool';
const distanciaEmKm = 100;
const litroCombustivelGasto = distanciaEmKm / KmPorLitro
const valorGasto = litroCombustivelGasto * precoEtanol

if (tipoCombustivel === 'Alcool') {
    console.log ((precoEtanol * litroCombustivelGasto).toFixed(2))
} else console.log ((precoGasolina * litroCombustivelGasto).toFixed(2))

