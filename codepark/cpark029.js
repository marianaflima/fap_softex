const prompt = require('prompt-sync')();

function Banco(conta, saldo, tipo, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipo;
    this.agencia = agencia;
    this.buscarSaldo = ()=> {
        console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
    }
    this.depositarValor = (valor)=> {
        this.saldo += valor;
        console.log(`+R$${valor.toFixed(2)} \nSaldo: R$${this.saldo.toFixed(2)}`);
    }
    this.sacarValor = (valor)=> {
        this.saldo-=valor;
        console.log(`-R$${valor.toFixed(2)} \nSaldo: R$${this.saldo.toFixed(2)}`);
    }
    this.mostrarNumConta = ()=> {
        console.log(`Numero da conta: ${this.conta}`)
    }
}

contaObjeto = new Banco(55432, 25000, "contacorrente", 1234);

function sistema() {
    while (true) {
        console.log('[1]Mostrar saldo \n[2]Depositar \n[3]Sacar \n[4]Numero da conta \n[0]Sair\n');
        op = Number(prompt('Digite sua opção: '));
        switch(op){
            case 1:
                contaObjeto.buscarSaldo();
                break
            case 2:
                meuValor = Number(prompt('Valor a depositar: '))
                contaObjeto.depositarValor(meuValor);
                break
            case 3:
                meuValor = Number(prompt('Valor a depositar: '))
                contaObjeto.sacarValor(meuValor);
                break
            case 4:
                contaObjeto.mostrarNumConta();
                break
            case 0:
                console.log('Encerrando sessão...');
                return;
            default:
                console.log('Opção inválida! Digite outra opção!');
        }
    }
};

sistema()