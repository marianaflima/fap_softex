console.log('CADASTRO') //Para situar o usuário

//Coleta de dados, cada variável mostra o nome da sua informação
let nome = prompt('Nome: ')
let endereço = prompt('Endereço: ')
let cidade = prompt('Cidade: ')
let cpf = Number(prompt('CPF: '))
let rg = Number(prompt('RG: '))
let idade = Number(prompt('Idade: '))
let nomePai = prompt('Nome do Pai: ')
let nomeMae = prompt('Nome da Mãe: ')
let peso = Number(prompt('Peso: '))
let rendaBruta = Number(prompt('Renda bruta: '))

//Apresentação das informações coletadas para o usuário
console.log('INFORMAÇÕES');
console.log('Nome: ', nome);
console.log('Endereço: ', endereço);
console.log('Cidade: ', cidade);
console.log('CPF: ', cpf);
console.log('RG: ', rg);
console.log('idade: ', idade + 'anos');
console.log('Nome do Pai: ', nomePai);
console.log('Nome da Mãe: ', nomeMae);
console.log('Peso: ', peso + 'kg');
console.log('Endereço: R$', rendaBruta);