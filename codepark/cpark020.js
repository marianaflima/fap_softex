class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    set next(value) {
        this.next = value;
    }

    get next() {
        return this.next;
    }

    get value() {
        return this.value;
    }
}

class LinkedList {
    constructor(value) {
        this.head = null;
        this.size = 0;

        if (value !== undefined) {
            this.append(value);
            if (Array.isArray(value)) {
                for(let element of value) {
                    this.append(element);
                }
            } else {
                this.append(value);
            }
        }
    }

    get size() {
        return this.size;
    }

    get isEmpty() {
        return this.size === 0;
    }
    
    get head() {
        return this.head;
    }

    set head(value) {
        this.head = value;
    }

    _getByIndex(index) {
        let previousNode = null;
        let currentNode = this.head;
        while (index > 0) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            index--;
        }

        return [currentNode, previousNode];
    }

    get(index) {
        let [currentNode,_] = this._getByIndex(index);
        return currentNode.value;
    }

    insert(node, value) {
        let newNode = new LinkedList(value);

        if (node == null) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let next = node.next;
            node.next = newNode;
            node.next.next = next;
        }

        this.size = this.size + 1;
        return node;
    }

    insertAt(value, index) {
        let [_, previous] = this._getByIndex(index);
        this.insert(previous, value);
    }

    add(value) {
        this.insert(null, value);
    }

    append(value) {
        this.insertAt(value, this.size);
    }

    remove(index) {
        let [currentNode, previousNode] = this._getByIndex(index);

        if (previousNode !== null) {
            previousNode.next = currentNode.next;
        } else {
            this.head = currentNode.next;
        }

        this.size = this.size - 1;
    }

    *values() {
        let current = this.head;
        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }

    toArray() {
        let array = [];
        for (let node of this)
            array.push(node);

        return array;
    }
}

let listaEncadeada = new LinkedList(['Albert', 'Elizabeth']);

