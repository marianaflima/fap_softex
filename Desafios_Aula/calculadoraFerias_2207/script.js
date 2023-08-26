function main() {
	const INsalarioBruto = parseFloat(document.querySelector("#INPUTsalarioBruto").value)
	const INmesesTrabalhados = parseFloat(document.querySelector("#INPUTmesesTrabalhados").value)

	/**/

	feedback()
	calcularDiasDeFerias()
	calcularFeriasProporcionais()
	calcularDescontoPrevidencia()
	calcularTotalFeriasProporcionais()
	
	/**/

	function feedback(){
		const OUTfeedback = document.querySelector("#OUTPUTfeedback")
		
		if (INmesesTrabalhados < 12) {
			OUTfeedback.innerHTML = 'Seu tempo de serviço ainda é insuficiente para tirar férias'
		} else if (INmesesTrabalhados == 12) {
			OUTfeedback.innerHTML = 'Você tem direito a tirar 30 dias de férias.'
		} else if (INmesesTrabalhados >= 13 && INmesesTrabalhados <= 23) {
			OUTfeedback.innerHTML = 'Você deve tirar suas férias.'
		} else if (INmesesTrabalhados >= 24) {
			OUTfeedback.innerHTML = "Não é permitido acumular férias, tire suas férias."
		}
	}

	/**/

	function calcularDiasDeFerias() {
		const OUTdiasDeFerias = document.querySelector("#OUTPUTdiasDeFerias")
		mesesTrabalhadosEQUIdiasDeFerias = INmesesTrabalhados * 2.5
		OUTdiasDeFerias.innerHTML = `${mesesTrabalhadosEQUIdiasDeFerias} dias`
	}

	/**/

	function calcularFeriasProporcionais() {
		const OUTvalorFeriasProporcionais = document.querySelector("#OUTPUTvalorFeriasProporcionais")
		const OUTvalorUmTercoFerias = document.querySelector("#OUTPUTvalorUmTercoFerias")
	
		valorFeriasProporcionais = (INsalarioBruto * INmesesTrabalhados) / 12
		valorUmTercoFerias = valorFeriasProporcionais / 3
	
		OUTvalorFeriasProporcionais.innerHTML = `R$${valorFeriasProporcionais.toFixed(2)}`
		OUTvalorUmTercoFerias.innerHTML = `R$${valorUmTercoFerias.toFixed(2)}`
	}

	/**/
	
	function calcularDescontoPrevidencia() {
		const OUTvalorDesconto = document.querySelector("#OUTPUTvalorDesconto")

		if (INsalarioBruto <= 1212) {
			descontoPrevidencia = 0.07
		} else if (INsalarioBruto <= 2427.35) {
			descontoPrevidencia = 0.09
		} else if (INsalarioBruto <= 3641.03) {
			descontoPrevidencia = 0.12
		} else if (INsalarioBruto <= 7087.22) {
			descontoPrevidencia = 0.14
		}

		valorDesconto = INsalarioBruto * descontoPrevidencia

		OUTvalorDesconto.innerHTML = `R$${valorDesconto.toFixed(2)}`
	}

	/**/

	function calcularTotalFeriasProporcionais() {
		const OUTvalorTotalFeriasProporcionais = document.querySelector("#OUTPUTvalorTotalFeriasProporcionais")
		valorTotalFeriasProporcionais = valorFeriasProporcionais + valorUmTercoFerias - valorDesconto
		OUTvalorTotalFeriasProporcionais.innerHTML = `R$${valorTotalFeriasProporcionais.toFixed(2)}`
	}
}

