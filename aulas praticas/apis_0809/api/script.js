const button = document.querySelector(".button")
const mostrarTela = document.querySelector(".resultado")
button.addEventListener('click', APICorreios)


function APICorreios() {
    const cep = Number(document.getElementById("cep").value)

    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(dados => {
        if (dados.bairro === dados.logradouro && dados.logradouro === dados.localidade) {
            mostrarTela.innerText = "CEP indisponível!"
        } else {
            mostrarTela.innerText = 
            `Bairro: ${dados.bairro} 
            Endereço: ${dados.logradouro}
            Localidade: ${dados.localidade}
            `;
        }

    })
    .catch(err => console.log(err))
}
