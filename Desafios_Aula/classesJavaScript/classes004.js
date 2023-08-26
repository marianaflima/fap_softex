class Calculadora {
    constructor(num1, num2) {
        this.numero1 = num1,
        this.numero2 = num2
    }

    get somar() {
        return `Soma: ${this.numero1 + this.numero2}`
    }

    get subtrair() {
        return `Diferença: ${this.numero1 - this.numero2}`
    }

    get multiplicar() {
        return `Produto: ${this.numero1 * this.numero2}`
    }

    get dividir() {
        return `Divisão: ${this.numero1 / this.numero2}`
    }
}

const numeros = new Calculadora(7, 3)

console.log(numeros.somar)
console.log(numeros.subtrair)
console.log(numeros.multiplicar)
console.log(numeros.dividir)