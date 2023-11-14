class Pessoa {
    constructor(nome, idade, genero, ocupacao) {
        this.nome = nome,
        this.idade = idade,
        this.genero = genero,
        this.ocupacao = ocupacao
    }

    get getNome() {
        return console.log(`Nome: ${this.nome}`)
    }

    get getIdade() {
        return console.log(`Idade: ${this.idade}`)
    }

    get getOcupacao() {
        return console.log(`Trabalho: ${this.ocupacao}`)
    }

    fazerAniversario() {
        this.idade++;
        console.log(`${this.nome} fez aniversário. Idade agora: ${this.idade}`);
    }

    apresentar() {
        const homemMulher = (this.genero == "Feminino" ? "Mulher" : "Homem");
        console.log(`Olá, eu sou ${this.nome}, sou ${homemMulher} tenho ${this.idade} anos e sou ${this.ocupacao}.`);
    }

    trabalhar() {
        console.log(`Indo para o meu trabalho, onde eu sou ${this.ocupacao}`)
    }
}

const pessoa = new Pessoa("Maria", 30, "Feminino", "Manicure");
pessoa.apresentar();
pessoa.fazerAniversario();
