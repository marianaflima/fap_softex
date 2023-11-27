import { Map } from 'typescript-collections';

interface Sanduiche {
    preco(): number;
}

class SanduichePadrao implements Sanduiche {
    ingredientes: Map<string, number>;

    constructor() {
        this.ingredientes = new Map<string, number>();
    }

    preco(): number {
        // Supondo que o preço é 1 para cada ingrediente
        return this.ingredientes.size * 1;
    }
}


abstract class SanduicheDecorador implements Sanduiche {
    sanduicheProduzido: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduicheProduzido = sanduiche;
    }

    preco(): number {
        return this.sanduicheProduzido.preco();
    }
}

class FrangoAssado extends SanduicheDecorador {
    constructor(s: Sanduiche) {
        super(s);
    }

    public preco(): number {
        return this.sanduicheProduzido.preco() + 4.5;
    }
}

class Pepperoni extends SanduicheDecorador {
    constructor(s: Sanduiche) {
        super(s);
    }

    public preco(): number {
        return this.sanduicheProduzido.preco() + 0.99;
    }
}

class QueijoMussarelaRalado extends SanduicheDecorador {
    constructor(s: Sanduiche) {
        super(s);
    }

    public preco(): number {
        return this.sanduicheProduzido.preco() + 2;
    }
}

function main(): void {
    const sanduichePadrao = new SanduichePadrao();
    const sandFrangoAssado = new FrangoAssado(sanduichePadrao);
    const sandPepperoni = new Pepperoni(sandFrangoAssado);
    const sandFinal = new QueijoMussarelaRalado(sandPepperoni);
    console.log("Preço do sanduíche final: R$" + sandFinal.preco());
}

main();