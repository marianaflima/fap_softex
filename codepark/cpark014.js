function calcular(op, n1, n2) {
    if (op === 1) {
        resultado = n1 + n2
    } else if (op === 2) {
        resultado = n1 - n2
    } else if (op === 3) {
        resultado = n1 * n2
    } else if (op === 4) {
        resultado = n1 / n2
    }
     return console.log(`Resultado: ${resultado}`)
}
    


let num1, num2, operação;

while (operação != 0) {
    while (!(operação < 5)) {
        operação = Number(prompt(`Calculadora
        [1] Soma
        [2] Subtração
        [3] Multiplicação
        [4] Divisão
        [0] Sair
        Qual operação você quer fazer? `))
        if (operação > 4) {
            console.log('Essa opção não existe!')
        }
    }
    if (operação === 0) {
        console.log('Saindo...')
        break
    }
    num1 = Number(prompt('Digite um número: '))
    num2 = Number(prompt('Digite outro número: '))
    calcular(operação, num1, num2)
    operação = undefined
}