let carro = {
    preço: 1000,
    portas: 4,
    marca: 'Audi',
    alterarPreço: function(novoPreço) {
       this.preço = novoPreço
       return console.log(`Novo preço: ${this.preço}`)
    }
}

carro.alterarPreço(3000)