let perfil = {
    nome: 'Mariana',
    sobrenome: 'Félix',
    idade: 18,
    exibir: function exibir() {
        return console.log(
`Nome: ${this.nome}
Sobrenome: ${this.sobrenome}
Idade: ${this.idade}
Nome Completo: ${(this.nome) + ' ' + (this.sobrenome)}`
        )
    }
}

perfil.exibir()

/*
let perfil = {
    nome: 'Mariana',
    sobrenome: 'Félix',
    idade: 18,
    nomeCompleto: function() {
        return console.log(`${this.nome} ${this.sobrenome}`)
    }
}

perfil.nomeCompleto()
*/