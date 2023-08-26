class Pessoa {
    constructor(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }
    
    get salario() {
        return this._salario = 2500
    }
}

class Aluno extends Pessoa {
    
    get salario() {
        return this._salario = 500
    }
    
}

class Criança extends Pessoa {
    get salario() {
        return this._salario = 15
    }
}

seuJoão = new Pessoa('João da Silva', 60)
joãoGrilo = new Aluno('João Grilo Martins', 21)
guel = new Criança('Miguel Ferraz', 10)

console.log(seuJoão.salario)
console.log(joãoGrilo.salario)
console.log(guel.salario)
