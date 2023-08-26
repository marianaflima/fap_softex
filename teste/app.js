const titulo = document.querySelector("h1")

console.log(titulo)

const num1 = document.querySelector("#n1")
const num2 = document.querySelector("#n2")
const soma = document.querySelector("#resultado")

const somar = () => {
    let total = Number(num1.value) + Number(num2.value)
    soma.innerHTML = total  
}
