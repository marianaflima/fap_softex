let a, b, c, éTriângulo, tipoTriângulo;

a = Number(prompt('Digite um lado: '))
b = Number(prompt('Digite outro lado: '))
c = Number(prompt('Digite mais um lado: '))

if (a < b + c && b < a + c && c < a + b) {
    éTriângulo = true
} else {
    éTriângulo = false
}

if (éTriângulo == true) {
    if (a == b == c) {
        tipoTriângulo = 'é EQUILÁTERO'
    } else if ((a == b != c) || (b==c !=a) || (a==c != b)) {
        tipoTriângulo = 'é ISÓSCELES'
    } else {
        tipoTriângulo = 'é ESCALENO'
    }
    console.log(`O triângulo ${tipoTriângulo}`)
} else {
    console.log('NÃO É triângulo')
}