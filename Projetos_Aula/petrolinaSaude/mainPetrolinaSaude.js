let consultasPetrolinaSaude = [], pacientesPetrolinaSaude = []

const 
dateTime = new Date,
anoAtual = dateTime.getFullYear()

class Consulta {
    constructor(paciente, medico, dataConsulta) {
        this.paciente = paciente,
        this.medico = medico,
        this.dataConsulta = dataConsulta
    }

    get marcarConsulta() {
        return this.marcarConsulta()
    }

    marcarConsulta() {
        let medico, dataConsulta, ultimaConsulta, historicoDatas = [], novaConsulta


        nomePaciente = prompt('Paciente: ')
        medico = prompt('Médico: ')
        dataConsulta = prompt('Data da consulta: ')

        for (let i = 0; i < pacientesPetrolinaSaude.length; i++) {
            if (pacientesPetrolinaSaude[i].nome.includes(nomePaciente)) {
                paciente = pacientesPetrolinaSaude[i]
                paciente.dataConsulta = dataConsulta,
                paciente.ultimaConsulta = ultimaConsulta,
                paciente.historicoDatas = historicoDatas
            }
        }
    
        novaConsulta = new Consulta (paciente.nome, medico, paciente.dataConsulta)
        consultas.push(novaConsulta)

        return console.log(`Consulta marcada!
        PACIENTE: ${novaConsulta.paciente}
        MEDICO: ${novaConsulta.medico}
        CONSULTA: ${novaConsulta.dataConsulta}`)
    }

    get buscarConsulta() {
        return this.buscarConsulta()
    }

    buscarConsulta() {
        nomeDoPaciente = prompt('Digite o nome do paciente: ')

        for (let i = 0; i < pacientesPetrolinaSaude.length; i++) {
            if (consultas[i].paciente.includes(nomePaciente)) {
                consultaMarcada = consultas[i]
                console.log(`PACIENTE: ${consultaMarcada.paciente}
                MEDICO: ${consultaMarcada.medico}
                CONSULTA: ${consultaMarcada.dataConsulta}`)

            } else {
                console.log('Esse paciente não tem consulta marcada!')
                desejaMarcar = prompt('Deseja marcar?[Sim/Não]: ').toUpperCase().split('')
                if (desejaMarcar == 'S') {
                    this.marcarConsulta
                } else {
                    break
                }
            }
        }
    }

}

class Paciente {
    constructor(nomePaciente, cpfPaciente, dataNascimentoPaciente, idadePaciente, dataConsultaPaciente, ultimaConsultaPaciente, historicoDatasPaciente) {
        this.nome = nomePaciente,
        this.cpf = cpfPaciente,
        this.dataNasc = dataNascimentoPaciente,
        this.idade = idadePaciente,
        this.dataConsulta = dataConsultaPaciente,
        this.ultimaConsulta = ultimaConsultaPaciente,
        this.historicoDatas = historicoDatasPaciente
    }

    //Cadastrar paciente
    get cadastrarNovoPaciente() {
        return this.cadastrarNovoPaciente()
    }

    cadastrarNovoPaciente() {
        let nome, dataDeNascimento, idade, cpf
        
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
    
        let paciente = new Paciente(nome, cpf, anoNasc, idade, null, null, null)
    
        pacientesPetrolinaSaude.push(paciente)
    
        return console.log(
            `PACIENTE: ${paciente.nome}
            CPF: ${paciente.cpf}
            IDADE: ${paciente.idade} anos
                    `)
        
        }


    //Buscar pacientes
    get buscarPaciente() {
        return this.buscarPaciente()
    }

    buscarPaciente() {
        nomePaciente = prompt('Nome do paciente: ')

        for (let i = 0; i < pacientesPetrolinaSaude.length; i++) {
            if (pacientesPetrolinaSaude[i].nome.includes(nomePaciente)) {
                let pacienteEncontrado = pacientesPetrolinaSaude[i]
                return console.log(`
                PACIENTE: ${pacienteEncontrado.nome}
                    CPF: ${pacienteEncontrado.cpf}
                    DATA DE NASCIMENTO: ${pacienteEncontrado.dataNasc}
                    IDADE: ${pacienteEncontrado.idade} anos
                    ÚTLIMA VEZ: ${pacienteEncontrado.ultimaConsulta}
                            `)
            } else if (!(pacientesPetrolinaSaude[i].nome.includes(nomePaciente))) {
               return console.log('Paciente Não Encontrado!')
            }
        }
    }

}

console.log(`----------------------------------------
            PETROLINA SAÚDE                
----------------------------------------

[1] PESQUISAR CONSULTA  //Para consultas já existentes
[2] PESQUISAR PACIENTE  //
[3] NOVO PACIENTE
[4] MARCAR CONSULTA
[5] SAIR`)

menuInicial = Number(prompt('O que você deseja fazer?: '))


switch(menuInicial) {
    case 1:
        pesquisarConsulta = Consulta.buscarConsulta
        break
    case 2:
        nomePaciente = Paciente.buscarPaciente
        break
    case 3:
        cadastrarPaciente = Paciente.cadastrarNovoPaciente
        break
    case 4:
        marcarConsulta = Consulta.marcarConsulta
        break
    case 5:
        console.log('Saindo...')
        break
    default:
        console.log('Entrada Inválida!')
}