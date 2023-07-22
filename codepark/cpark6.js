console.log(`
------------------------
   TRANSPORTE AKINATOR
------------------------
`)

let veiculo
let terrestre = prompt('É terrestre? ') //Pergunta se é terrestre
if (terrestre === 'Sim') {
    veiculo = 'Então, o veículo escolhido foi ' //Define o início da mensagem final
    let capacete = prompt('Usa capacete? ') //Pergunta sobre o capacete
    if (capacete == 'Sim') { //Define MOTO
        veiculo += 'a MOTO' //Código com adição de string: Quebra p/ o final
    } else if (capacete == 'Não') {
        let numPessoa = prompt('Cabe mais de uma pessoa? ') //Qtas pessoas cabem?
        if (numPessoa == 'Não') {
            let pesado = prompt('É pesado? ')
            if (pesado === 'Sim') { //Define TRATOR
                veiculo += 'o TRATOR'
        } else {
            let temPedal = prompt('Tem pedal? ')
            if (temPedal === 'Sim') { //Define BICICLETA
                veiculo += 'a BICICLETA.'
            }
            }
        } else if (numPessoa == 'Sim') { //Para o caso de caber + de 1 pessoa
        veiculo = 'Então, o veículo não consta na lista'
        }
    }
} else { //Se o veículo não for terreste
    veiculo = 'Então, o veículo não consta na lista'
}

    console.log(veiculo);