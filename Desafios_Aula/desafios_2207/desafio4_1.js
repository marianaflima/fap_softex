const senhaUser = '1234'
let inputSenha, statusLog = false;

do {
    inputSenha = prompt('Digite sua senha: ')
    if (inputSenha == senhaUser) {
        statusLog = true
        console.log('Acesso PERMITIDO')
        break
    } else {
        console.log('Acesso NEGADO')
        console.log('Tente novamente')
    }
} while (statusLog == false)
