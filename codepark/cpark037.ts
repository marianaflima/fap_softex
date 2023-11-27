interface Estrategia {
    executar(numero1: number, numero2: number): number;
}

class Soma implements Estrategia {
    constructor() {}

    executar(valor1: number, valor2: number): number {
        return valor1 + valor2;
    }
}

class Subtracao implements Estrategia {
    constructor() {}
    
    executar(valor1: number, valor2: number): number {
        return valor1 - valor2;
    }
}

class Multiplicao implements Estrategia {
    constructor() {}
    
    executar(valor1: number, valor2: number): number {
        return valor1 * valor2;
    }
}

class Calculadora {
    private numero1: number = 0;
    private numero2: number = 0;
    private estrategia: Estrategia | null = null;

    definirNumeros(num1: number, num2: number): void {
        this.numero1 = num1;
        this.numero2 = num2;
    }

    definirEstrategia(estrategia: Estrategia): void {
        this.estrategia = estrategia;
    }

    operacao(op: string): void {
        switch(op) {
            case '+':
                this.definirEstrategia(new Soma());
                break;
            case '-':
                this.definirEstrategia(new Subtracao());
                break;
            case '*':
                this.definirEstrategia(new Multiplicao());
                break;
            default:
                console.log("Operação inválida.");
        }
    }

    executarOperacao(): void {
        if (this.estrategia) {
            const resultado = this.estrategia.executar(this.numero1, this.numero2);
            console.log(`Resultado da operação: ${resultado}`);
        } else {
            console.log("Nenhuma estratégia configurada.");
        }
    }
}


const calculadora = new Calculadora();

calculadora.definirNumeros(7,3);
calculadora.operacao('-');
calculadora.executarOperacao();