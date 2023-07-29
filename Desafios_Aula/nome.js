let perfil = {
    nome: 'Mariana',
    idade: 18,
    sexo: 'Feminino',
    endereço: 'Rua Z, nº 777',
    exibir: function exibir() {
        return console.log(
`Nome: ${this.nome}
Idade: ${this.idade}
Sexo: ${this.sexo}
Endereço: ${this.endereço}`
            )
    }
}

perfil.exibir()
