let altura, largura, comprimento;

altura = Number(prompt('Digite a altura: '))
largura = Number(prompt('Digite a largura: '))
comprimento = Number(prompt('Digite o comprimento: '))

const paredeMenor = altura * largura
const paredeMaior = altura * comprimento
const areaTotal = 2*(paredeMenor) + 2*(paredeMaior)
const numeroLajotas = areaTotal / 1.5

console.log( `Numero de lajotas p/ compra: ${numeroLajotas}` )