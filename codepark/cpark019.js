
let arrays = [
    [3, 7, 9, 1, 0],
    [3, 7, 9, 1, 0],
    [3, 7, 9, 1, 0]
]

for (let array = 0; array < arrays.length; array++) {
    if (arrays[array] === 1) {

        //Fila - First In, First Out
        for (let i = arrays[array].length; i > 0; i--) {
            array.shift()
            console.log(arrays[array])
        }

    } else if (arrays[array] === 1) {

        //Pilha - Last In, Last Out
        for (let i = 0; i < (arrays[array].length + 4); i++) {
            arrayPilha.pop()
            console.log(arrays[array])
        }

        //A adição nessa contagem se deve ao fato de o tamanho normal do código não foi útil para o "for" imprimir a progressão da lista, não sei o porquê :-/

    } else {

        //Lista
        while (arrays[array].length != 0) {
            arrayLista.shift()
            console.log(arrays[array])
          } 

    
    }
}