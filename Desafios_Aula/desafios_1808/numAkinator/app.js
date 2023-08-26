const numero = 73,
chuteUsuario = document.querySelector("#chuteUsuario"),
msgUsuario = document.querySelector("#resultado")
let i = 0;


const verificador = () => {
    chute = Number(chuteUsuario.value)
    if (numero == chute) {
        i = 0;
        msgUsuario.innerHTML = alert(`Você acertou! \nErrou ${i} vezes...`)
    } else {
        i++;
        if (chute > numero) {
            msgUsuario.innerHTML = alert("Errou! O número é menor.")
        } else {
            msgUsuario.innerHTML = alert("Errou! O número é maior")
        }
    }
    }
