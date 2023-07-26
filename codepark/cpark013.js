let a, b, c, calcular;

function calculadora(n1, n2, op) {
    switch(op) {
        case 1:
            resultado = n1 + n2;
            break;
        case 2:
            resultado = n1 - n2;
            break;
        case 3:
            resultado = n1 * n2;
            break;
        case 4:
            resultado = n1 / n2;
            break;
        default:
            resultado = 0;
    }
    return resultado;
}

numA = Number(prompt('Digite um número: '))
numB = Number(prompt('Digite outro número: '))
operação = Number(prompt(`
[1] Soma
[2] Subtração
[3] Multiplicação
[4] Divisão
Digite a operação que deseja fazer: `))

calcular = calculadora(numA, numB, operação);
console.log(`Resultado: ${calcular}`)