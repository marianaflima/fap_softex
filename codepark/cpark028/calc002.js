const prompt = require('prompt-sync')();

function calcular(a,b) {
    let op;

    console.log("[+] SOMA \n[-]SUBTRAÇÃO \n[*]PRODUTO \n[/]DIVISÃO\n")
    op = prompt('Qual vai ser a operação?: ');

    switch(op) {
        case '+':
            a += b
            console.log(`Resultado: ${a}`)
            break
        case '-':
            a -= b
            console.log(`Resultado: ${a}`)
            break
        case '/':
            if (b === 0) {
                console.log("Cálculo inválido!");
            } else {
                a /= b
                console.log(`Resultado: ${a}`);
            }
            break
        case '*':
            a *= b
            console.log(`Resultado: ${a}`)
            break    
    }
}


let n1, n2;

n1 = Number(prompt('Digite um número: '));
n2 = Number(prompt('Digite outro número: '));

calcular(n1,n2);