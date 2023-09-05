const prompt = require('prompt-sync')();

function calcular() {
    let n1, n2, op;

    n1 = Number(prompt('Digite um número: '));
    n2 = Number(prompt('Digite outro número: '));
    console.log("[+] SOMA \n[-]SUBTRAÇÃO \n[*]PRODUTO \n[/]DIVISÃO\n")
    op = prompt('Qual vai ser a operação?: ');

    switch(op) {
        case '+':
            n1 += n2
            console.log(`Resultado: ${n1}`)
            break
        case '-':
            n1 -= n2
            console.log(`Resultado: ${n1}`);
            break
        case '/':
            if (n2 === 0) {
                console.log("Cálculo inválido!");
            } else {
                n1 /= n2
                console.log(`Resultado: ${n1}`);
            }
            break
        case '*':
            n1 *= n2;
            console.log(`Resultado: ${n1}`);
            break    

    }

}

calcular();
