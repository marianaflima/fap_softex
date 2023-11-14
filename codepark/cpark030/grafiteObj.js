const prompt = require('prompt-sync');

class Grafite {
    constructor(cor, ponta, material, reservatorio) {
        this.cor = cor,
        this.ponta = ponta,
        this.material = material,
        this.reservatorio = reservatorio
    }

    recarregar() {
        if (this.reservatorio == false) {
            this.reservatorio == true
            console.log("Reservatório de ponta recarregado")
        } else {
            console.log("Reservatorio ainda tem ponta")
        }
    }

    get recarregarPontas() {
        return this.recarregar()
    }

    usar() {
        console.log("Escrevendo usando o grafite")
    }

    get usarGrafite() {
        return this.usar()
    }

    pontaAtual() {
        console.log("Aumentando ponta atual")
    }

    get recarregarPontaAtual() {
        return this.pontaAtual()
    }

    get corGrafite() {
        return console.log(`${this.cor}`)
    }

    get materialGrafite() {
        return console.log(`${this.material}`)
    }

}

grafiteObjeto = new Grafite('roxo', 0.7, 'metal', false)

grafiteObjeto.recarregarPontas
grafiteObjeto.recarregarPontaAtual
grafiteObjeto.usarGrafite