interface Veiculo {
    clone(): Veiculo,
    represent(): void;
}

class Carro implements Veiculo {
    constructor(public modelo: string, public marca: string, public cor: string, public numeroRodas: number, public numeroPortas: number) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        this.numeroPortas = numeroPortas;
    }

    clone(): Veiculo {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }

    represent() {
        return `\n= = Carro = = \nModelo: ${this.modelo} \nMarca: ${this.marca} \nCor: ${this.cor} \nNumero de Rodas: ${this.numeroRodas} \nNumero de Portas: ${this.numeroPortas}`
    }
}

class Moto implements Veiculo {
    constructor (public modelo: string, public marca: string, public cor: string, public numeroRodas: number) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone(): Veiculo {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        return `\n= = Moto = = \nModelo: ${this.modelo} \nMarca: ${this.marca} \nCor: ${this.cor} \nNumero de Rodas: ${this.numeroRodas} \n`
    }
}

class Aplicacao {
    public veiculos: Veiculo[] = [];

    addVeiculo(veiculo: Veiculo): void {
        this.veiculos.push(veiculo)
    }

    clone(): Veiculo[] {
        return this.veiculos.map(veiculo => veiculo.clone())
    }
}

const carro1 = new Carro("Mobi", "Fiat", "Branco", 4, 4), 
carro2 = new Carro("HB20", "Hyundai", "Cinza", 4, 4),
carro3 = new Carro("208", "Peugot", "Vermelho", 4, 2), 
moto1 = new Moto("Fazer 250", "Yamaha", "Vermelha", 2), 
moto2 = new Moto("POP", "Honda", "Preto", 2), 
moto3 = new Moto("Biz", "Honda", "Branca", 2);

const arrayVeiculos = new Aplicacao();

arrayVeiculos.addVeiculo(carro1);
arrayVeiculos.addVeiculo(carro2);
arrayVeiculos.addVeiculo(carro3);
arrayVeiculos.addVeiculo(moto1);
arrayVeiculos.addVeiculo(moto2);
arrayVeiculos.addVeiculo(moto3);

console.log(arrayVeiculos)

const arrayClone = arrayVeiculos.clone()

console.log(arrayClone)