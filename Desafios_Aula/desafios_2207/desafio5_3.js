let anguloA, anguloB, anguloC, tipoTriangulo;

anguloA = Number(prompt('Digite um ângulo: '))
anguloB = Number(prompt('Digite outro ângulo: '))
anguloC = Number(prompt('Digite mais um ângulo: '))

const somaDosAngulos = anguloA + anguloB + anguloC

if (anguloA == 90 || anguloB == 90 || anguloC == 90) {
    tipoTriangulo = 'Retângulo'
} else if (anguloA > 90 || anguloB > 90 || anguloC > 90) {
    tipoTriangulo = 'Obtusângulo'
} else if (anguloA < 90 && anguloB < 90 && anguloC < 90) {
    tipoTriangulo = 'Acutângulo'
}

console.log(tipoTriangulo);
