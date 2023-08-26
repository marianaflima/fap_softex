class Familiar {
    constructor(Nome) {
        this.nome = Nome;
        this.next = null;
    }
}

class ArvoreGenealógica {
    constructor() {
        this.head = null;
    }

    //Adiciona ao início da lista
    addFirst(Nome) {
        const newMember = new Familiar(Nome);
        newMember.next = this.head;
        this.head = newMember
    }

    //Adiciona ao final da lista
    addLast(Nome) {
        const newMember = new Familiar(Nome);
        if (!this.head) {
            this.head = newMember;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newMember;
        }
    }

    //Remove o primeiro item da lista
    removeFirst(Nome) {
        if (!this.head) {
            return null;
        }
        const removedMember = this.head;
        this.head = this.head.next;
        removedMember.proximo = null;
        return removedMember.Nome
    }

    //Remove o último item da lista
    removeLast(Nome) {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            const removedMember = this.head;
            this.head = null;
            this.head = null;
                return removedMember.Nome
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current.Nome
    }

    //Procura o item na lista
    search(Nome) {
        let current = this.head;
        while (current) {
            if (current.Nome === Nome){
                return current
            }
            current = current.next;
        }
        return null;
    }

    //Retorna o tamanho da lista
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next
        }
        return count;
    }

    //Imprime a lista
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.Nome);
            current = current.next;
        }
    }
}

const familiaReal = new ArvoreGenealógica();

familiaReal.addFirst('Albert')
familiaReal.addLast('Elizabeth')
familiaReal.addLast('Charles')

familiaReal.printList()