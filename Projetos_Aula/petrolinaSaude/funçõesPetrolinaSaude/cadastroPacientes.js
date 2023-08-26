pacientesPetrolinaSaude = []

const 
dateTime = new Date,
anoAtual = dateTime.getFullYear()


function novoPaciente() {
    let nome, dataDeNascimento, idade, cpf, medico, dataConsulta, historicoDatas = [], ultimaConsulta
    
    //Dados do paciente
    nome = prompt('Nome do paciente: ')
    cpf = prompt('CPF: ')

    //Idade do paciente
    dataDeNascimento = prompt('Data de nascimento: ').split('/')
    anoNasc = Number(dataDeNascimento[2])
    idade = anoAtual - dataDeNascimento

    //Para definir a ultima vez que se consultou
    if (historicoDatas.length == 0) {
        ultimaConsulta = dataConsulta
        historicoDatas.shift(ultimaConsulta)
    } else {
        ultimaConsulta = historicoDatas[0]
    }

    let paciente = {
        nome: nome,
        cpf: cpf,
        dataNasc: dataDeNascimento,
        idade: idade,
        ultimaConsulta: ultimaConsulta
    }

    pacientesPetrolinaSaude.push(paciente)

    return console.log(
        `PACIENTE: ${paciente.nome}
        CPF: ${paciente.cpf}
        IDADE: ${paciente.idade} anos
        MÉDICO: ${medico}
        CONSULTA MARCADA: ${dataConsulta}
        ÚTLIMA VEZ: ${paciente.ultimaConsulta}
                `)
}

novoCadastro = prompt('Deseja cadastrar usuário? [Sim/Não]: ').toUpperCase().split('')

if (novoCadastro[0] == 'S') {
    novoPaciente()
}