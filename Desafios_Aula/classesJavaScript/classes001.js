class Aluno {
    constructor(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula,
        this.nome = nome,
        this.prova1 = notaProva1,
        this.prova2 = notaProva2,
        this.trabalho = notaTrabalho
    }
    
    get media() {
        return this.calcularMedia()
    }

    calcularMedia() {
        let op = Number(((this.prova1 + this.prova2) * 2.5) + (this.trabalho * 2))/7
        return op.toFixed(2)
    }
    
    get final() {
        return this.vaiParaFinal()
    }
    
    vaiParaFinal() {
        if (this.media <= 7) {
            return (7 - this.media).toFixed(2)
        } else {
            return 0
        }
    }
}

const alunoMatheus = new Aluno(24309, 'Matheus Silva', 8.0, 8.0, 4)

console.log('Média: ' + alunoMatheus.media)
console.log('Precisa tirar: ' + alunoMatheus.final)