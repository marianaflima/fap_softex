let simNao, consultas = [], pacientesPetrolinaSaude = []

//Função que marca a consulta
marcarConsulta = () => {
    let medico, dataConsulta
    medico = prompt('Médico: ')
    dataConsulta = prompt('Data da consulta: ')
    paciente = prompt('Paciente: ')

    novaConsulta = {
        paciente: paciente, 
        medico: medico, 
        dataConsulta: dataConsulta
    }
    consultas.push(novaConsulta)

}

//Execução
simNao = prompt('Deseja marcar consulta? [Sim/Não]: ').toUpperCase().split('')
if (simNao[0] == 'S') {
    marcarConsulta()
} else {
    return null;
}

