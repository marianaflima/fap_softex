let numero = Number(prompt('Digite um número: '))
let strNumero = numero.toString()

function inverter(x) {
    inverteNumero = x.split('').reverse().join('')
    return console.log(inverteNumero)
}

inverter(strNumero)