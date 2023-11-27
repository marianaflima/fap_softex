class SistemaSegurança {
    private static instancia: SistemaSegurança;
    private senha: string;

    private constructor() {
        this.senha = "mi78965"
    }

    public static getInstance(): SistemaSegurança {
        if (!SistemaSegurança.instancia) {
            SistemaSegurança.instancia = new SistemaSegurança();
        }
        return SistemaSegurança.instancia
    }

    public acessarBaseSecreta(password: string): void{
        if (password === this.senha) {
            console.log("Acesso concedido!")
        } else {
            console.log("Acesso negado!")
        }
    }
}

function main() {
    const sistemaSegurançaInstancia1 = SistemaSegurança.getInstance();
    const sistemaSegurançaInstancia2 = SistemaSegurança.getInstance();

    console.log(sistemaSegurançaInstancia1 === sistemaSegurançaInstancia2);

    const entradaUser = "mi78965";
    sistemaSegurançaInstancia1.acessarBaseSecreta(entradaUser);
}

main()

