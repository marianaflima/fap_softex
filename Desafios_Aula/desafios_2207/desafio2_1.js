let a, b, c, delta, função2grau, x1, x2;

x1 = x2 = Number()
a = 2;
b = 8;
c = -24;

delta = (b**2) - (4*a*c);

if (delta < 0) {
    função2grau = 'Não há resolução!'
} else if (delta == 0) {
    função2grau = ((-b) / (2*a)).toFixed(1)
} else {
    função2grau = []
    x1 = ((-b + (delta**0.5))/ (2*a)).toFixed(1)
    x2 =  ((-b -(delta**0.5))/ (2*a)).toFixed(1)
    função2grau.push(x1, x2)
}

console.log(`Resultado: ${função2grau}`)
