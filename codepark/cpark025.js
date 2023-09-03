const prompt = require('prompt-sync')();

let valor1, valor2, operador, resultado;

valor1 = Number(prompt('Digite um número: '));
valor2 = Number(prompt('Digite outro número: '));
operador = prompt('[ + ] Soma\n[ - ] Subtração\n[ * ] Multiplicação\n[ / ] Divisão\nDigite a operação: ')

switch(operador) {
    case '+':
        resultado = valor1 + valor2;
        break
    case '-':
        resultado = valor1 - valor2;
        break
    case '*':
        resultado = valor1 * valor2;
        break
    case '/':
        if (valor2 !== 0) {
            resultado = valor / valor2;
            break
        } else {
            throw new Error('Operação inválida!')
        }
    default:
        throw new Error('Operador inválido!')
}

console.log(resultado);