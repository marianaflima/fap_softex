function calcularSalarioFerias(){
    const salarioBruto = parseFloat(document.querySelector("#InputsalarioBruto").value)
    const mesesTrabalhados = parseFloat(document.querySelector("#inputmesestrabalhados").value)
    const salarioAReceber = parseFloat(document.querySelector("#InputsalarioReceber").value)
    const resultElemento = parseFloat(document.querySelector("#resultsalarioReceber").value)
    salarioAReceber = salarioBruto * descontoPrevidencia
    resultElemento.innerHTML = salarioAReceber

}

let salarioBruto, salarioAReceber,descontoPrevidencia, mesestrabalhados;


salarioBruto = parseFloat(prompt("Salário Bruto: R$"));
mesesTrabalhados = prompt("Tempo de serviço (em meses): ")


if (salarioBruto <= 1212) {
    descontoPrevidencia = 0.9925
} else if (salarioBruto <= 2427.35) {
    descontoPrevidencia = 0.91
} else if (salarioBruto <= 3641.03) {
    descontoPrevidencia = 0.88
} else if (salarioBruto <= 7087.22) {
    descontoPrevidencia = 0.86
} 

salarioAReceber = (salarioBruto + (salarioBruto/3)) - (salarioBruto * descontoPrevidencia) 

if (mesestrabalhados < 12) {
    console.log('Seu tempo de serviço ainda é insuficiente para tirar férias')
} else if (mesestrabalhados == 12) {
    console.log('Você tem direito a tirar 30 dias de férias.')
} else if (mesestrabalhados >= 13 && mesestrabalhados <= 23) {
    console.log('Você deve tirar suas férias.')
} else if (mesestrabalhados >= 24) {
    console.log('Não é permitido acumular férias, tire suas férias.')
}

