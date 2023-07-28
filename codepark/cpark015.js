/*
Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1923 e 2022. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2023).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
*/
    
let nomeCompleto, anoNascimento, idadeAtual, anoAtual, rodar;

anoAtual = 2023;
rodar = true;

while (rodar = true) {
    nomeCompleto = prompt('Digite seu nome: ')
    try {
        anoNascimento = Number(prompt('Digite o ano que você nasceu: '))
        if (anoNascimento >= 1923 && anoNascimento <= 2022) {
            rodar = false;
            idadeAtual = anoAtual - anoNascimento;
            console.log('Sua idade é:', idadeAtual)
        } else {
            throw new Error('Fora do intervalo de anos estabelecido!')
        }
    } catch(error) {
        console.log(error, 'Digite novamente.')
    }
}
