const button = document.querySelector(".button")
const randomFact = document.querySelector(".fact")

function chuckNorrisAPI() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(facts => {
        randomFact.innerHTML = `
        <h4> ${facts.value} </h4>
        
        `
    })
    .catch(err => console.log(err))
}






