const prompt = require('prompt-sync')();

function menu() {
    console.log(`
==================================
[1] SOMA
[2] SUBTRAÇÃO
[3] MULTIPLICÇÃO
[4] DIVISÃO
==================================`)
}

function calculo(opcao, a, b) {
    let op, num1, num2, resultado;
    op = opcao;
    num1 = a;
    num2 = b;
    switch(op) {
        case 1:
            resultado = num1 + num2;
            break;
        case 2:
            resultado = num1 - num2;
            break;
        case 3:
            resultado = num1 * num2;
            break;
        case 4:
            try {
                if (num2 === 0) {
                    throw new Error("Divisão por zero não existe");
                }
                return num1 / num2;
            } catch (error) {
                console.error("Erro:", error.message);
            } finally {
                console.log("bloco finally executado");
            }
            break;
    }

    return resultado;
}

//
let n1, n2, resultado;

n1 = Number(prompt("Digite um número: "));
n2 = Number(prompt("Digite outro número: "));

menu()
op = Number(prompt("Escolha uma opção: "));

resultado = calculo(op, n1, n2);
console.log("Resultado: " + resultado);

