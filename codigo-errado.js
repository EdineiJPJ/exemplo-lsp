class Retangulo {
    constructor(largura, altura) {
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

class Quadrado extends Retangulo {
    constructor(lado) {
        super(lado, lado);
    }

    // Sobrescrevendo os métodos para manter os lados iguais
    setLargura(lado) {
        this.largura = this.altura = lado;
    }

    setAltura(lado) {
        this.largura = this.altura = lado;
    }
}

// Função que usa Retângulo, mas espera que seja substituível por uma classe derivada
function imprimeArea(retangulo) {
    retangulo.setLargura(4);
    retangulo.setAltura(5);
    console.log(`Área: ${retangulo.getArea()}`);
}

let retangulo = new Retangulo(2, 3);
imprimeArea(retangulo);  // Área: 20

let quadrado = new Quadrado(5);
imprimeArea(quadrado);   // Área: 25 (mas esperado: 20)