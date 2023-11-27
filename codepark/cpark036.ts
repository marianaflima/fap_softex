/* 
Crie um adaptador que permita que um objeto Pato seja usado como se fosse uma galinha
AdaptadorPato e AdaptadorPatoDemo
*/

interface Passaro {
    som(): void;
    voar(): void;
}

class Pato implements Passaro {
    som(): void {
        console.log("Quen! Quen!")
    }
    voar(): void {
        console.log("Voando como pato...")
    }
}

class Galinha implements Passaro {
    som(): void {
        console.log("Cocorocó!")
    }
    voar(): void {
        console.log("Não posso voar...")
    }
}

class AdaptadorPato implements Passaro {
    private pato: Pato;
    constructor(pato: Pato) {
        this.pato = pato;
    }
    som(): void {
        this.pato.som();
    }
    voar(): void {
        this.pato.voar();
    }
}

class AdaptadorPatoDemo {
    static demonstrar(ave: Passaro):void {
        console.log("Ave fazendo som: ");
        ave.som();

        console.log("Ave voando: ");
        ave.voar();
    } 
}

const pato = new Pato();
const galinha = new Galinha();

console.log("Pato:");
AdaptadorPatoDemo.demonstrar(pato);

console.log("\nGalinha:");
AdaptadorPatoDemo.demonstrar(galinha);

console.log("\nAdaptadorPato:");
const adaptadorPato = new AdaptadorPato(pato);
AdaptadorPatoDemo.demonstrar(adaptadorPato);