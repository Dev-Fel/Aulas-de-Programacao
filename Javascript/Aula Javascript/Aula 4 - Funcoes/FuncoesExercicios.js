

function escrevaMeuNome(nome) {
    return('Meu nome é ' + nome);
}

escrevaMeuNome('Felipe');
escrevaMeuNome('Eduardo');

function verificarMaioridade (idade) {
    if (idade <= 17)
    console.log(escrevaMeuNome('Felipe') + ' e sou menor de idade')
    else (
        console.log(escrevaMeuNome('Felipe') + ' e sou maior de idade')
    )
}

const anoDeNascimento = 1990;
const idade = 2023 - anoDeNascimento;

verificarMaioridade(idade);

