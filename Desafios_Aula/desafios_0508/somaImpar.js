let a = Array(5), somaImpar = 0

for (let i = 0; i < a.length; i++) {
    a[i] = Number(prompt('Digite um número: '))
}

a.map(number => {
    if (number % 2 != 0) {
        somaImpar += number
    }
})

console.log(`Soma dos ímpares: ${somaImpar}`)