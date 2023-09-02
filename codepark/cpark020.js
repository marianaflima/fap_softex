class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Adicionar um nó no final da lista
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Exibir os valores da lista
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Criando uma lista encadeada e adicionando elementos
  const myList = new LinkedList();
  myList.append('Albert');
  myList.append('Elizabeth');
  myList.append('Charles');
  
  // Exibindo os valores da lista
  myList.display();
  