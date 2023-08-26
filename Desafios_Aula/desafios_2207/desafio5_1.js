let numMacas, preçoMacas;

numMacas = Number(prompt('Digite o número de maçãs compradas: '))

if (numMacas < 12) {
    preçoMacas = numMacas * 0.3
} else {
    preçoMacas = numMacas * 0.25
}

console.log(`Valor total: ${preçoMacas}`)