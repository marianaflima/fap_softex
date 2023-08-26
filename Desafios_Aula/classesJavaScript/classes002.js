class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }
    
    get itsEmail() {
        return `${this.email}`
    }
}

//exemplo
let userEmail = prompt('Informe seu e-mail: ')
let userPassword = prompt('Digite uma senha: ')

const user = new Usuario(userEmail, userPassword)

console.log('Email ('+ user.itsEmail +') cadastrado com sucesso!')