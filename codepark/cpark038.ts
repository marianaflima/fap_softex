/*
- implementar uma subclasse da classe Editor chamada TextEditor
- aplicar o método insertLine, que recebe parâmetros lineNumber
    e text
- inserir o texto na ordem correspondente a lineNumber 
    e deslocar linhas posteriores se necessário
- aplicar o método removeLine, que recebe lineNumber como parâmetro,
    deleta o texto da linha correspondente e desloca as linhas posteriores
    se necessário
- instanciar um TextEditor e disparar o evento "open"
- receber as linhas de texto, que serão inseridas no objeto textEditor, do 
    usuário até que ele envie o texto "EOF", que não deve ser inserido 
    no objeto textEditor
*/

//como eu poderia fazer para ser nesse estilo aqui?

class Editor {
    protected observers: Function[];

    constructor() {
        this.observers = [];
    }

    open() {
        console.log("Editor aberto.");
    }

    save() {
        console.log("Conteúdo salvo em um arquivo:");
    }

    addObserver(observer: Function) {
        this.observers.push(observer);
    }

    notifyObservers() {
        for (const observer of this.observers) {
            observer();
        }
    }
}

class TextEditor extends Editor {
    private lines: string[];

    constructor() {
        super();
        this.lines = [];
    }

    insertLine(lineNumber: number, text: string): void {
        if (lineNumber < 1 || lineNumber > this.lines.length + 1) {
            console.log("Linha inválida para inserção.");
            return;
        }

        this.lines.splice(lineNumber - 1, 0, text);
        console.log(`Linha ${lineNumber} inserida: ${text}`);
    }

    removeLine(lineNumber: number): void {
        if (lineNumber < 1 || lineNumber > this.lines.length) {
            console.log("Linha inválida para remoção.");
            return;
        }

        const removedLine = this.lines.splice(lineNumber - 1, 1)[0];
        console.log(`Linha ${lineNumber} removida: ${removedLine}`);
    }

    saveAndPrintContent(): void {
        super.save();
        this.printContent();
    }

    printContent(): void {
        console.log(this.lines.join('\n'));
    }

    openEditor(): void {
        super.open();
        this.notifyObservers();
    }

    handleUserInput(): void {
        const readline = require('readline-sync');

        console.log('Digite as linhas de texto. Digite "EOF" para encerrar.');

        while (true) {
            const input = readline.prompt();
            
            if (input.toLowerCase() === 'eof') {
                this.saveAndPrintContent();
                break;
            } else {
                this.insertLine(this.lines.length + 1, input);
            }
        }

        this.openEditor();
    }
}



const textEditor = new TextEditor();

textEditor.addObserver(() => {
    console.log("Observador: Editor aberto. Realizar ações adicionais se necessário.");
});

textEditor.handleUserInput();
