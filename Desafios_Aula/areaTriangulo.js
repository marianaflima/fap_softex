console.log(`
--------------------------
    AREA DO TRIÂNGULO
--------------------------`)
baseTriangulo = Number(prompt('Digite a base: '))
alturaTriangulo = Number(prompt('Digite a altura: '))

function areaTriangulo(x, y) {
    area = (x * y) / 2
    return console.log(area, 'm²')
}

areaTriangulo(baseTriangulo, alturaTriangulo)