const prompt = require('prompt-sync')();

// stages
let consultasPetrolinaSaude = [];
let pacientesPetrolinaSaude = [];

// Pegar a Data atual
const dateTime = new Date();
const anoAtual = dateTime.getFullYear();

class Consulta {
    constructor(paciente, medico, dataConsulta) {
        this.paciente = paciente;
        this.medico = medico;
        this.dataConsulta = dataConsulta;
    }

    // Marcar Consultas
    marcarConsulta() {
        let dataConsulta, ultimaConsulta, historicoDatas = [], novaConsulta;

        const nomePaciente = prompt('Paciente: ');
        const medico = prompt('Médico: ');
        dataConsulta = prompt('Data da consulta: ');

        for (let i = 0; i < pacientesPetrolinaSaude.length; i++) {
            if (pacientesPetrolinaSaude[i].nome.includes(nomePaciente)) {
                this.paciente = pacientesPetrolinaSaude[i];
                this.paciente.dataConsulta = dataConsulta;
                this.paciente.ultimaConsulta = ultimaConsulta;
                this.paciente.historicoDatas = historicoDatas;
            }
        }

        novaConsulta = new Consulta(this.paciente, this.medico, this.dataConsulta);
        consultasPetrolinaSaude = novaConsulta.push;

        console.log(`Consulta marcada!\n` +
            `PACIENTE: ${nomePaciente}\n` +
            `MEDICO: ${medico}\n` +
            `CONSULTA: ${dataConsulta}`);
    }

    // Buscar Consulta
    buscarConsulta() {
        const nomeDoPaciente = prompt('Digite o nome do paciente: ');

        for (let i = 0; i < consultasPetrolinaSaude; i++) {
            if (consultasPetrolinaSaude[i].paciente.includes(nomeDoPaciente)) {
                const consultaMarcada = consultasPetrolinaSaude[i];
                console.log(`PACIENTE: ${consultaMarcada.paciente}\n` +
                    `MEDICO: ${consultaMarcada.medico}\n` +
                    `CONSULTA: ${consultaMarcada.dataConsulta}`);
            } else {
                console.log('Esse paciente não tem consulta marcada!');
                const desejaMarcar = prompt('Deseja marcar?[Sim/Não]: ').toUpperCase();
                if (desejaMarcar === 'S') {
                    this.marcarConsulta();
                } else {
                    break;
                }
            }
        }
    }
}

class Paciente {
    constructor(nomePaciente, cpfPaciente, dataNascimentoPaciente, idadePaciente, dataConsultaPaciente, ultimaConsultaPaciente, historicoDatasPaciente) {
        this.nome = nomePaciente;
        this.cpf = cpfPaciente;
        this.dataNasc = dataNascimentoPaciente;
        this.idade = idadePaciente;
        this.dataConsulta = dataConsultaPaciente;
        this.ultimaConsulta = ultimaConsultaPaciente;
        this.historicoDatas = historicoDatasPaciente || [];
    }

    // Registrar Pacientes
    cadastrarNovoPaciente() {
        let nome, dataDeNascimento, idade, cpf;

        // Info
        nome = prompt('Nome do paciente: ');
        cpf = prompt('CPF: ');

        // Calc Idade
        dataDeNascimento = prompt('Data de nascimento: ').split('/');
        const anoNasc = Number(dataDeNascimento[2]);
        idade = anoAtual - anoNasc;

        // Ver ultima consulta
        let ultimaConsulta;
        if (this.historicoDatas.length === 0) {
            ultimaConsulta = this.dataConsulta;
            this.historicoDatas.unshift(ultimaConsulta);
        } else {
            ultimaConsulta = this.historicoDatas[0];
        }

        const paciente = new Paciente(nome, cpf, anoNasc, idade, null, null, null);
        pacientesPetrolinaSaude.push(paciente);

        console.log(`\nPACIENTE: ${paciente.nome}\n` +
            `CPF: ${paciente.cpf}\n` +
            `IDADE: ${paciente.idade} anos`);
    }

    // Achar Pacientes
    buscarPaciente() {
        const nomePaciente = prompt('Nome do paciente: ');

        for (let i = 0; i < pacientesPetrolinaSaude.length; i++) {
            if (pacientesPetrolinaSaude[i].nome.includes(nomePaciente)) {
                const pacienteEncontrado = pacientesPetrolinaSaude[i];
                console.log(`PACIENTE: ${pacienteEncontrado.nome}\n` +
                    `CPF: ${pacienteEncontrado.cpf}\n` +
                    `DATA DE NASCIMENTO: ${pacienteEncontrado.dataNasc}\n` +
                    `IDADE: ${pacienteEncontrado.idade} anos\n` +
                    `ÚTLIMA VEZ: ${pacienteEncontrado.ultimaConsulta}`);
            } else {
                console.log('Paciente Não Encontrado!');
            }
        }
    }
}

const consultaObjeto = new Consulta();
const pacienteObjeto = new Paciente();

let a = 1;

while (a != 0) {

    console.log(`----------------------------------------
            PETROLINA SAÚDE                
----------------------------------------

[1] PESQUISAR CONSULTA  // Para consultas já existentes
[2] PESQUISAR PACIENTE  //
[3] NOVO PACIENTE
[4] MARCAR CONSULTA
[5] SAIR`);


    const menuInicial = Number(prompt('O que você deseja fazer?: '));

    switch (menuInicial) {
        case 1:
            consultaObjeto.buscarConsulta();
            break;
        case 2:
            pacienteObjeto.buscarPaciente();
            break;
        case 3:
            pacienteObjeto.cadastrarNovoPaciente();
            break;
        case 4:
            consultaObjeto.marcarConsulta();
            break;
        case 5:
            console.log('Saindo...');
            a = 0;
            break;
        default:
            console.log('Entrada Inválida!');
    };

}