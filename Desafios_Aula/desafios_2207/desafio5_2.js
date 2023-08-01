let altura, sexo, pesoIdeal;

altura = Number(prompt('Digite sua altura: '))
console.log(
`[1] Feminino
[2]Masculino`
)
sexo = prompt('Digite seu sexo:')

if (sexo == 1) {
    pesoIdeal = (62.1 * altura) - 44.7
} else if (sexo == 2) {
    pesoIdeal = (72.7 * altura) - 58
} else {
    console.log('Erro! Entrada inválida')
    console.log(
`[1] Feminino
[2]Masculino`
        )
    sexo = prompt('Digite seu sexo: ')
}

if (pesoIdeal != 0) {
    console.log(`Peso ideal: ${(pesoIdeal).toFixed(1)}`)
} 