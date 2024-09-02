class Forma {
    getArea() {
        throw new Error("O método necessita de subclasses");
    }
}

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    setLargura(largura) {
        this.largura = largura;
    }

    setAltura(altura) {
        this.altura = altura;
    }

    getArea() {
        return this.largura * this.altura;
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    setLado(lado) {
        this.lado = lado;
    }

    getArea() {
        return this.lado * this.lado;
    }
}

// Função que lida com qualquer forma
function imprimeArea(forma) {
    console.log(`Área: ${forma.getArea()}`);
}

let retangulo = new Retangulo(4, 5);
imprimeArea(retangulo);  // Área: 20

let quadrado = new Quadrado(5);
imprimeArea(quadrado);   // Área: 25