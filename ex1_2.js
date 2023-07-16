let salario = Number(prompt("Salário: "))
let aumentoSalario = 1;
let percentual 
let aumento
let novoSalario

if (salario < 280) {
    percentual = 0.2
} else if (salario < 700) {
    percentual = 0.15
} else if (salario < 1500) {
    percentual = 0.10
} else if (salario => 1500) {
    percentual = 0.05
}

aumento = salario * percentual
novoSalario = salario + aumento

console.log('Salário anterior: R$', salario)
console.log('Aumento percentual: '+ (percentual * 100) +'%')
console.log('Aumento aplicado: R$', aumento)
console.log('Novo salário (com aumento): R$', novoSalario)