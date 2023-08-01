let a, b, c, d, e, lista = []
let i, soma = 0

a = Number(prompt('Digite um número: '))
b = Number(prompt('Digite outro número: '))
c = Number(prompt('Digite outro número: '))
d = Number(prompt('Digite outro número: '))
e = Number(prompt('Digite outro número: '))

lista.push(a, b, c, d, e)

function somar(lista) {
    for (i = 0; i < lista.length; i++) {
        soma += lista[i]
    }

    return console.log(`Soma: ${soma}`)
}

somar(lista)
