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
            console.log("O pato movido a pilha não pode voar.");
            throw new Error("Bateria esgotada, o pato não pode voar."); 
            recarregarBateria();
        }
    }
}
function recarregarBateria() { // 
    this.bateria = 1;
    console.log("Bateria recarregada.");
}
function fazOvoar(pato) {
    pato.voar(); // Era para que qualquer pato voe.
}
let patoNormal = new Pato();
let patoAPilha = new PatoMovidoAPilha();

fazOvoar(patoNormal); 
fazOvoar(patoAPilha);  