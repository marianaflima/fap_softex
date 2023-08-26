/*

m = c*((i+1)**n)
m = c + j
j = m - c

mensalidade * ((1 + taxaJuros)**(tempoContribuiçãoMeses-1)))

m = montante
c = capital aplicado
i = taxa de juros
n = tempo de aplicação (meses ou anos)
j = juros compostos


*/

const nomeInput = document.querySelector("#nome"), 
mensalidadeInput = document.querySelector("#mensalidade"), 
tempoContribuiçãoMesesInput = document.querySelector("#tempo"), 
taxaJuros = 0.517,
resultado = document.querySelector("#resultado")


function simulacao() {
    const nome = nomeInput.value
    const mensalidade = Number(mensalidadeInput.value)
    const tempoContribuiçãoMeses = Number(tempoContribuiçãoMesesInput.value)
    const tempoContribuição = (tempoContribuiçãoMeses/12).toFixed(1)
    
    let jurosCompostos = (mensalidade *((1 + taxaJuros)**(tempoContribuiçãoMeses - 1)))/taxaJuros
    let montante = (mensalidade + jurosCompostos).toFixed(2)

    resultado.textContent = "Olá " + nome + ",\n     juntando R$" + mensalidade + " todo mês, você terá R$" + montante + " em " + tempoContribuição + " anos"
}