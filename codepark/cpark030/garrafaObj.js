const prompt = require('prompt-sync')

class Garrafa {
    constructor(volumeGarrafaML, volumeAgua, material, termica, cheiaVazia) {
        this.volumeGarrafaML = volumeGarrafaML,
        this.volumeAgua = volumeAgua,
        this.material = material,
        this.termica = termica,
        this.cheiaVazia = cheiaVazia
    }

    isVazia() {
        if (this.volumeAgua === 0) {
            console.log("Garrafa vazia")
        } else {
            console.log(`Garrafa em ${((this.volumeAgua/this.volumeGarrafaML)*100).toFixed(0)}%`)
        }
    }

    encherGarrafa() {
        console.log("Enchendo garrafa...");
        console.log(`Volume anterior: ${this.volumeAgua}`)
        this.volumeAgua = this.volumeGarrafaML
        console.log(`Volume agora: ${this.volumeAgua}`)
        this.cheiaVazia = false
    }

    beberAgua() {
        if (this.volumeAgua > 0) {
            this.cheiaVazia = true
            this.volumeAgua -= ((this.volumeGarrafaML * 0.08).toFixed(0))
            console.log("Bebendo água...")
        } else if (this.volumeAgua <= 0){
            this.cheiaVazia = false
            console.log("Não tem mais água!!")
        }
    }

    get isTermica() {
        if (this.termica === true) {
            return console.log("Garrafa térmica")
        } else {
            return console.log("Garrafa não térmica")
        }
    }

    get volume() {
        return console.log(`Volume: ${this.volumeGarrafaML}`)
    }

    get volumeAtual() {
        return console.log(`Volume: ${this.volumeAgua}`)
    }
}

garrafaObj = new Garrafa(500, 0, "metal", true, true)

garrafaObj.isVazia()
garrafaObj.encherGarrafa()
garrafaObj.beberAgua()
garrafaObj.volumeAtual
garrafaObj.isVazia()