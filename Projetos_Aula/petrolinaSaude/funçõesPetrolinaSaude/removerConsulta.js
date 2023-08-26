let i

function desmarcarConsulta() {
    simNao = prompt('Deseja realmente desmarcar consulta? [Sim/Não]: ').toUpperCase().split('')
    if (simNao[0] == 'S') {
        consultas.pop(paciente[i])
        return console.log('')
    } else {
        return null;
    }
}