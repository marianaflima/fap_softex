const nota1 = parseFloat(document.querySelector("#nota1").value)
const nota2 = parseFloat(document.querySelector("#nota2").value)
const nota3 = parseFloat(document.querySelector("#nota3").value)
const mediaElemento = document.querySelector("#media").value

function media() {
    media = (nota1 + nota2 + nota3)/3
    mediaElemento.innerHTML = media
    document.write(mediaElemento.innerHTML)
}