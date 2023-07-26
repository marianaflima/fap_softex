let nome, idade, altura, maiorDeIdade;


nome = prompt('Digite seu nome: ')
idade = prompt('Digite sua idade: ')
altura = prompt('Digite sua altura: ')
if (idade >= 18) {
	maiorDeIdade = true
} else {
	maiorDeIdade = false
}

console.log('Nome:', nome)
console.log('Idade:', idade)
console.log('Altura:', altura)
console.log('Maior de Idade?', maiorDeIdade)