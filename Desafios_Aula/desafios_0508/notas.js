const estudantes = [
    {nome: 'José', nota: 5.7},
    {nome: 'Maria', nota: 4.8},
    {nome: 'Paula', nota: 7.5},
    {nome: 'Eustáquio', nota: 6.7}
    ]

const sum = estudantes.reduce((total, soma) =>{
    //(total = i = 0 no início)
    //(soma = item de estudante)
    return total + soma.nota/4
},0)

console.log(sum.toFixed(1))
