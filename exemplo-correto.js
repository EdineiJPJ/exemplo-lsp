class Pato {
    voar() {
        console.log("O pato está voando.");
    }
}
class PatoMovidoAPilha extends Pato {
    bateria = 0;

    voar() {
        if (this.bateria > 0) {
            console.log("O pato movido a pilha está voando.");
            this.bateria--;
        } else {
            console.log("Bateria esgotada. Recarregando.");
            recarregarBateria(); // O pato se recarrega.
            super.voar(); // Continua o que foi esperado.
        }
    }
}
function recarregarBateria() { // 
    this.bateria = 1;
    console.log("Bateria recarregada.");
}
function fazOvoar(pato) { // Faz pato voar de qualquer maneira.
    pato.voar(); 
}
let patoNormal = new Pato();
let patoAPilha = new PatoMovidoAPilha();

fazOvoar(patoNormal);
fazOvoar(patoAPilha);