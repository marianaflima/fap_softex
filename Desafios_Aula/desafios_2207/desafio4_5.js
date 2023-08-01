let codigoDeBarras, procedência;

codigoDeBarras = Number(prompt('Código de barras: '))

switch(codigoDeBarras) {
    case 1: //Sul
        procedência = 'Sul' 
        break
    case 2: //Norte
        procedência = 'Norte'
        break
    case 3: //Leste
        procedência = 'Leste'
        break
    case 4: //Oeste
        procedência = 'Oeste'
        break
    case 5:
    case 6: //Nordeste
        procedência = 'Nordeste'
        break
    case 7:
    case 8:
    case 9: //Sudeste
        procedência = 'Sudeste'
        break
    case 10: //Centro-Oeste
        procedência = 'Centro-Oeste'
        break
    case 11: //Noroeste
        procedência = 'Noroeste'
        break
    default:
        procedência = 'Importado'
}

console.log(`Procedência: ${procedência}`)
