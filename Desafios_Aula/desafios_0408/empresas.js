const empresasTech = [
    {nome: 'Samsung', valorDeMercado: 50, ceo: 'Kim Hyun Suk', anoDeCriação: 1938},
    {nome: 'Microsoft', valorDeMercado: 415, ceo: 'Satya Nadella', anoDeCriação: 1975},
    {nome: 'Intel', valorDeMercado: 117, ceo: 'Brian Krzanich', anoDeCriação: 1968},
    {nome: 'Facebook', valorDeMercado: 383, ceo: 'Mark Zuckenberg', anoDeCriação: 2004},
    {nome: 'Spotify', valorDeMercado: 30, ceo: 'Daniel Ek', anoDeCriação: 2006},
    {nome: 'Apple', valorDeMercado: 845, ceo: 'Tim Cook', anoDeCriação: 1976}
]
console.log('-----------------------------------------------')
const empresasDepois2000 = empresasTech.filter(empresa => {
    if (empresa.anoDeCriação > 2000) {
        console.log(`${empresa.nome} | ${empresa.anoDeCriação}`)
    }
})
console.log('-----------------------------------------------')

const empresasECeo = empresasTech.forEach(empresa => {
   console.log(`| Empresa: ${empresa.nome} | CEO: ${empresa.ceo} |`)
})
console.log('-----------------------------------------------')

const valorTotalDeMercado = empresasTech.reduce((total, empresa) => {
    return total + empresa.valorDeMercado
},0)

console.log(`Valor Total de Mercado: US$${valorTotalDeMercado} mil`)