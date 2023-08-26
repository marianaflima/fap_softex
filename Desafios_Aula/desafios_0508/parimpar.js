a = Array(10)
b = []

for (let i = 0; i < 10; i++) {
    a[i] = Number(prompt('Digite um número: '))
}

a.map(number => {
    if (number % 2 === 0) {
        number *= 5
    } else {
        number += 5
    }
    b.push(number)
})

console.log(a)
console.log(b)