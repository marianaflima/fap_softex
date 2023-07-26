console.log(`
--------------------
  SISTEMA ESCOLAR
--------------------`);

let nome, nota1, nota2, media, faltas, aprovado_reprovado;

nome = prompt('Nome do aluno: ');
nota1 = Number(prompt('Digite a 1ª nota: '));
nota2 = Number(prompt('Digite a 2ª nota: '));
media = (nota1 + nota2) / 2

if (media >= 7) {
    faltas = Number(prompt('Digite o nº de faltas: '))
    if (faltas <= 3) {
        aprovado_reprovado = 'APROVADO'
    } else {
        aprovado_reprovado = 'REPROVADO'
    }
} else {
    aprovado_reprovado = 'REPROVADO'
}

console.log('Nome:', nome)
console.log('Este aluno está:', aprovado_reprovado)