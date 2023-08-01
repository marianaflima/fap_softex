let num, numDivisores = 0;

num = Number(prompt('Digite um número: '))

for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        numDivisores += 1
    } else {
        continue
    }
}

if (numDivisores == 2) {
    console.log(`${num} é PRIMO`)
} else {
    console.log(`${num} NÃO É primo`)
}