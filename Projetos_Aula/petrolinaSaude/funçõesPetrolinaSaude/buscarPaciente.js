pacientesPetrolinaSaude = [
    {nome: 'Mariana Félix de Lima',
    cpf: 71696714419,
    dataNasc: '07/05/2005',
    idade: 18,
    ultimaConsulta: '14/04/2023'
    }
]

nomePaciente = prompt('Buscar paciente: ')

for (let i = 0; i < pacientesPetrolinaSaude.length; i++) {
    if (pacientesPetrolinaSaude[i].nome.includes(nomePaciente)) {
        let pacienteEncontrado = pacientesPetrolinaSaude[i]
        console.log(`
        PACIENTE: ${pacienteEncontrado.nome}
            CPF: ${pacienteEncontrado.cpf}
            DATA DE NASCIMENTO: ${pacienteEncontrado.dataNasc}
            IDADE: ${pacienteEncontrado.idade} anos
            ÚTLIMA VEZ: ${pacienteEncontrado.ultimaConsulta}
                    `)
    } else if (!(pacientesPetrolinaSaude[i].nome.includes(nomePaciente))) {
        console.log('Paciente Não Encontrado!')
    }
}