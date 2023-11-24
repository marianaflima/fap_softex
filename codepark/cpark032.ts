interface Computador {
    ram: number;
    hd: number;
    cpu: number;
    type: string;

    toString(): string
}

class PC implements Computador {
    public type;

    constructor(public ram: number, public hd: number, public cpu: number) {
        this.type = "PC";
    }
    
    public toString(): string {
        return `= = PC = = \nRAM: ${this.ram}GB \nHDD: ${this.hd}GB \nCPU: ${this.cpu}GHz`;
    }

}

class Servidor implements Computador {
    public type;
    constructor(public ram: number, public hd: number, public cpu: number) {
        this.type = "Servidor"
    }
    public toString(): string {
        return `= = Servidor = = \nRAM: ${this.ram}GB \nHDD: ${this.hd}GB \nCPU: ${this.cpu}GHz`;
    }
}

class FabricaComputadores {
    criarComputador(type: string, ram: number, hd: number, cpu: number) {
        try {
            if (type === "PC") {
                return new PC(ram, hd, cpu);
            } else if (type === "Servidor") {
                return new Servidor(ram, hd, cpu);
            } else {
                throw new Error("Tipo não suportado!")
            }
        } catch(error) {
            console.log(error);
        }
    } 
}

function clientCode() {
    const fabricaComputador = new FabricaComputadores();

    const type = String(prompt("Digite o tipo de computador que você quer: "));
    const ram = Number(prompt("Tamanho da RAM: "));
    const hd = Number(prompt("Tamanho do HD: "));
    const cpu = Number(prompt("Frequência da CPU: "));

    const comp = fabricaComputador.criarComputador(type,ram,hd,cpu);

    console.log(comp.toString())
};

clientCode();
