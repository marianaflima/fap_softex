let distanciaPecorrida, quantidadeGasolinaConsumida;

distanciaPecorrida = Number(prompt('Digite a distância pecorrida (em Km): '))
quantidadeGasolinaConsumida = Number(prompt('Digite o volume de gasolida consumido na viagem (em L): '))
const consumoKmL = distanciaPecorrida / quantidadeGasolinaConsumida

if (consumoKmL < 8) {
    console.log('Venda o carro!')
} else if (consumo <= 14) {
    console.log('Econômico')
} else {
    console.log('Super econômico')
}