
let num1 = Number(prompt("Valor 1: "))
let num2 = Number(prompt("Valor 2: "))
let num3 = Number(prompt("Valor 3: "))
let maiorNum

if (num1 > num2 && num1 > num3) {
    maiorNum = num1
} else if (num2 > num1 && num2 > num3) {
    maiorNum = num2
} else if (num3 > num1 && num3 > num2) {
    maiorNum = num3
}

console.log('O maior número é: ', maiorNum)