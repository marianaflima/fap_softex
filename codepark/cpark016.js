
const candidatos = {
    candidatoX: 0,
    candidatoY: 0,
    candidatoZ: 0,
    brancos: 0
}

let votação, inválido, temVotantes, rodar = true;

while (rodar == true) {
    votação = Number(prompt(
`[889] Candidato X
[847] Candidato Y
[515] Candidato Z
[0] Nulo/Branco
Digite seu candidato:`        
        ))
    try {
        if (isNaN(votação) == true) {
            throw new Error('Digite uma entrada válida!')
        }
    } catch(error) {
        console.log(error)
    }
    if (votação == 889) {
        console.log('Candidato X')
        candidatos.candidatoX += 1
    } else if (votação == 847) {
        console.log('Candidato Y')
        candidatos.candidatoY += 1
    } else if (votação == 515) {
        console.log('Candidato Z')
        candidatos.candidatoZ += 1
    } else {
        if (isNaN(votação) == false) {
            console.log('NULO')
            candidatos.brancos += 1   
        }
    }
    if (isNaN(votação) == false) {
        temVotantes = prompt('Há mais votantes na fila? [Sim/Não]: ').toUpperCase().split('')
            if (temVotantes[0] == 'N') {
                rodar = false
            } else {
                continue
            }
    }
}

function resultadoFinal(a, b, c, d) {
    candidatoX = a
    candidatoY = b
    candidatoZ = c
    votoNulo = d
    if (candidatoX > candidatoY && candidatoX > candidatoZ) {
        vencedor = 'Candidato X'
    } else if (candidatoY > candidatoX && candidatoY > candidatoZ) {
        vencedor = 'Candidato Y'
    } else if (candidatoZ > candidatoX && candidatoZ > candidatoY) {
        vencedor = 'Candidato Z'
    }
    
    return console.log(

`RESULTADO FINAL:
Vencedor: ${vencedor}
-----------------------------
Candidato X: ${candidatoX}
Candidato Y: ${candidatoY}
Candidato Z: ${candidatoZ}
Votos nulos + brancos: ${votoNulo}`
    )
}

resultadoFinal(candidatos.candidatoX, candidatos.candidatoY, candidatos.candidatoZ, candidatos.brancos)
