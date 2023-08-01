let ano, anoBissexto;

ano = Number(prompt('Digite um ano: '))
if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0) {
    console.log('O ano é BISSEXTO')
} else {
    console.log('O ano NÃO É bissexto')
}