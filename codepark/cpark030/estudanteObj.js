const prompt = require('prompt-sync')();

class Estudante {
    constructor(nome, idade, curso, periodo) {
        this._nome = nome;
        this.idade = idade;
        this._curso = curso;
        this._periodo = periodo;
        this._temProva = false;
    }

    getNome() {
        return console.log(`Nome: ${this._nome}`);
    }

    getCurso() {
        return console.log(`Curso: ${this._curso}`);
    }

    getTemProva() {
        return console.log(`Tem prova marcada?: ${this._temProva}`);
    }

    professorMarcouProva() {
        if (this._temProva === false) {
            console.log("Prof: Alunos, terá prova nas próximas semanas");
            this._temProva = true;
            console.log("Est: Tou com prova para fazer!");
        } else {
            console.log("Colega: Você viu que o professor marcou prova?");
            console.log("Eu sei, vou estudar!");
        }
    }

    vamosPraFesta() {
        console.log("Galera: Ei, simbora pro show?");
        if (this._temProva === false) {
            console.log("Est: Opa, simbora!");
        } else {
            console.log("Est: Vixe, não dá, tou com prova perto");
        }
    }

    estudar() {
        console.log("Estudando...");
    }
}

const estudanteObj = new Estudante("João", 18, "Administração");

estudanteObj.getNome();
estudanteObj.getCurso();
estudanteObj.professorMarcouProva();
estudanteObj.vamosPraFesta();
estudanteObj.estudar();

