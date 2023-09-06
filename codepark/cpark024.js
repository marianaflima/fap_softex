const prompt = require('prompt-sync')();

let nota1, nota2, nota3, media;

nota1 = Number(prompt("Digite a 1ª nota: "));
nota2 = Number(prompt("Digite a 2ª nota: "));
nota3 = Number(prompt("Digite a 3ª nota: "));

media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua nota final é: ${media.toFixed(1)}`);