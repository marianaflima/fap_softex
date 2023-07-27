let numA, numB, op;
numA = Number(prompt('Digite um número: '))
numB = Number(prompt('Digite outro número: '))
op = Number(prompt(`
[1]Soma
[2]Subtração 
[3]Multiplicação
[4]Divisão
[0]Sair
Qual operação você quer fazer? `))

function calculadora(n1, n2, operação) {
    while (true) {
        if (operação === 1) {
            resultado = n1 + n2
        } else if (operação === 2) {
            resultado = n1 - n2
        } else if (operação === 3) {
            resultado = n1 * n2
        } else if (operação === 4) {
            resultado = n1 + n2
        } else if (operação === 0) {
            resultado = 'Saindo...'
            break
        } else {
            resultado = console.log('Essa opção não existe!')
        }
operação = Number(prompt(`
[1]Soma
[2]Subtração 
[3]Multiplicação
[4]Divisão
[0]Sair
Qual operação você quer fazer? `))
    }
    return console.log(resultado);
}

calcular = calculadora(numA, numB)
console.log(calcular)