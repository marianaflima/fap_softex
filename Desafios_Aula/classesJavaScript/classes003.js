class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome,
        this.idade = idade,
        this.sexo = sexo
    }

    get apresentar() {
        let msg = `Nome: ${this.nome}, Idade: ${this.idade}, Sexo:${this.sexo}`
        return msg
    }
}

const donaMaria = new Pessoa('Maria dos Anjos', 65, 'Feminino')

console.log(donaMaria.apresentar)