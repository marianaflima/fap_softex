const button = document.querySelector(".button")
const value = document.querySelector(".value")

function blockchainAPI() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(data => {
        const real = data.BRL.last;
        value.innerHTML = real;
    })
    .catch(err => console.log(err))
}