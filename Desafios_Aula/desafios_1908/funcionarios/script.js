const funcionarios = ["José", "Maria", "Giovanna", "Pedro", "Dália", "Carina", "Luiz", "Hugo", "Bento"]

const entrada = document.querySelector("#buscador")
const resultado = document.querySelector("#resultado")

function buscar() {
    const nome = entrada.value
    if (funcionarios.includes(nome)) {
        resultado.innerHTML = "Funcionário(a): " + nome
    } else {
        resultado.textContent = "Não há funcionários com esse nome"
    }
}