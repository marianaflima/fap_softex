var nota1, nota2, media;


nota1 = Number(window.prompt('Digite a 1ª nota: '));
nota2 = Number(window.prompt('Digite a 2ª nota: '));
media = (nota1 + nota2) / 2;
if (media < 7) {
  window.alert('Média abaixo de 7.');
  window.alert('Aluno REPROVADO');
}
if (media >= 7) {
  window.alert('Média acima de 7.');
  window.alert('Aluno APROVADO');
}