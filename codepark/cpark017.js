let i = 0, nomes, idades, coresFavoritas; //Declaração das variáveis

nomes = ['Claudia', 'Vanessa', 'Luiza', 'Clara', 'Odette', 'Beatriz', 'Mariana', 'Cecília', 'Carolina', 'Júlia']
idades = [52, 15, 17, 14, 81, 40, 89, 30, 25, 10]
coresFavoritas = ['Preto', 'Lilás', 'Marrom', 'Amarelo', 'Azul', 'Branco', 'Coral', 'Vermelho', 'Verde-água', 'Rosa']

//Imprime a tabela original
console.log(
`
-------------------------------
|Nome     |Idade     |Cor     |
-------------------------------`)
for (i; i < 10; i++) {
console.log(`| ${nomes[i]} | ${idades[i]} | ${coresFavoritas[i]} |
----------------------------`)
}

//Altera as informações de Mariana, que está no indíce 6
idades.splice(6, 1, 18)
coresFavoritas.splice(6, 1, 'Laranja')

//Imprime uma nova tabela, com tudo já alterado.
console.log(
`
-------------------------------
|Nome     |Idade     |Cor     |
-------------------------------`)
for (i = 0; i < 10; i++) {
console.log(`| ${nomes[i]} | ${idades[i]} | ${coresFavoritas[i]} |
----------------------------`)
}