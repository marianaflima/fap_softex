let salario, valorEmpréstimo;

salario = Number(prompt('Digite seu salário: R$'))
valorEmpréstimo = Number(prompt('Valor do empréstimo: R$'))
const valorLimite = salario * 0.2

if (valorEmpréstimo > valorLimite) {
    console.log('Valor NEGADO, pode excede o limite para seu salário.')
} else {
    console.log('Empréstimo AUTORIZADO!!!')
}