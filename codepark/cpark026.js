const prompt = require('prompt-sync')();

let nota1, nota2, media, notaParaPassar;

nota1 = Number(prompt('1ª nota: '));
nota2 = Number(prompt('2ª nota: '));

media = (nota1 + nota2) / 2
notaParaPassar = 14 - (media * 2);


media >= 7 ? 
console.log(`Aprovado! \nMEDIA: ${media/2}`) 
: 
console.log(`Reprovado! \nMEDIA: ${media} \nPRECISA TIRAR: ${notaParaPassar}`)