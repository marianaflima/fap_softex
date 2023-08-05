
const animais = [
    ['Melman', 'Girafa', 10],
    ['Cora', 'Cachorro', 3],
    ['Alex', 'Leão', 15],
    ['Niette', 'Gato', 7],
    ['Gloria', 'Hipopótamo', 8]
    ]

console.log(
`------------------------------------
            INFORMAÇÕES             
------------------------------------`)
animais.forEach(animal => {
    return console.log(`| Nome: ${animal[0]} | Espécie: ${animal[1]} | Idade: ${animal[2]} |`)})