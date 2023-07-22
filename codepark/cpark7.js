console.log(`
---------------------
TABUADA
---------------------`)

let counter //número que vai multiplicar o número pedido
let number = Number(prompt('Digite um número para ver a tabuada: '))
for (counter = 1; counter <= 10; counter++) {
    console.log(number + ' X ' + counter + ' = ' + (number * counter))
}