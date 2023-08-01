const prompt = require('prompt-sync')();
let a, b, n1 = [], n2 = [];

a = Number(prompt('Digite um número: '))
b = Number(prompt('Digite outro número: '))
n1.push(a)
n2.push(b)

n2.push(n1[0])
n1.push(n2[0])

console.log('------------------------')
console.log('|Antes |    ' +n1[0] +'|    '+ n2[0] + '|')
console.log('|Depois|    ' + n1[1] + '|    ' + n2[1] + '|')
console.log('------------------------')
