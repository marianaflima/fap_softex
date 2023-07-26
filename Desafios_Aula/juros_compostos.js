let capitalInicial, taxaJurosMensal, tempoInvestimentoMeses, montante
capitalInicial = Number(prompt('Capital inicial: '))
taxajurosMensal = Number(prompt('Taxa mensal de juros (0.xxx): '))
tempoInvestimentoMeses = Number(prompt('Tempo de Investimento Mensal: '))

function jurosCompostos(capital, taxa, tempo) {
    montante = (capital * ((1 + taxa)**tempo)).toFixed(2)
    return console.log(`R$: ${montante}`)
}

jurosCompostos(capitalInicial, taxajurosMensal, tempoInvestimentoMeses)