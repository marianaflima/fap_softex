let altura, peso, categoria;

altura = Number(prompt('Digite sua altura (em m): '))
peso = Number(prompt('Digite seu peso (em kg): '))

if (peso < 60) {
    if (altura < 1.2) {
        categoria = 'A'
    } else if (altura <= 1.70) {
        categoria = 'B'
    } else {
        categoria = 'C'
    }
} else if (peso <= 90) {
    if (altura < 1.2) {
        categoria = 'D'
    } else if (altura <= 1.70) {
        categoria = 'E'
    } else {
        categoria = 'F'
    } 
 
} else {
    if (altura < 1.2) {
        categoria = 'G'
    } else if (altura <= 1.70) {
        categoria = 'H'
    } else {
        categoria = 'I'
    }
}

console.log(`Categoria: ${categoria}`)