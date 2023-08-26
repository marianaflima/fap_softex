class No {
	constructor(Nome) {
		this.Nome = Nome;
		this.proximo = null;
	}
}

class ListaLigada {
	constructor() {
		this.cabeça = null;
	}

	addFirst(Nome) {
		const newNo = new No(Nome);
		newNo.proximo = this.cabeça;
		this.cabeça = newNo;
	}

	addLast(Nome) {
		const newNo = new No(Nome);
		if (!this.cabeça) {
			this.cabeça = newNo;
		} else {
			let current = this.cabeça
			while (current.proximo) {
				current = current.proximo
			}
			current.proximo = newNo
		}
	}

	removeFirst(Nome) {
		if (!this.cabeça) {
			return null;
		}
		const removedNo = this.cabeça;
		this.cabeça = this.cabeça.proximo
		removedNo.proximo = null;
		return removedNo.Nome;
	}

	removeLast(Nome) {
		if (!this.cabeça) {
			return null;
		}
		if (!this.cabeça.proximo) {
			const removedNo = this.cabeça;
			this.cabeça = null;
            return removedNo.Nome;
		}
        let current = this.cabeça;
        let previous = null;
        while (current.proximo) {
            previous = current;
            current = current.proximo
        }
        previous.proximo = null;
        return current.Nome
	}

	search(Nome) {
        let current = this.cabeça
        while (current) {
            if (current.Nome === Nome) {
                return current
            }
            current = current.proximo;
        }
        return null;
	}

	size() {
        let count = 0;
        let current = this.cabeça;
        while (current) {
            count++;
            current = current.proximo
        }
        return count;
	}

}