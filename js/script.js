// Creazione variabili
const container = document.getElementById("container");
const startBtn = document.getElementById("start");
var punteggio = 0;

//Creazione griglia al click del bottone
let bombe = [];
startBtn.addEventListener("click", creaGriglia)

//Funzioni creazione griglia
function creaGriglia() {    
    for (let i = 0; i < 100; i++) {
        //Creazione nuova cella
        let cella = document.createElement("div");
        //Stilizzazione cella
        impostaCella(cella, i);
        //Evento click cella
        cella.addEventListener("click", clickCella);
        //Aggiunta cella alla griglia
        container.append(cella);
        console.log(`cella ${i + 1} creata.`);
    }
    bombe = generaBombe();
    punteggio = 0;
    startBtn.classList.add("hidden");
};
function impostaCella(cella, i) {
    cella.classList.add("cella");
    console.log(cella, cella.classList);
    cella.innerText = i + 1;
    return(cella);
};

//Gestione click, punteggio, perdita e vittoria
function clickCella() {
    numCella = this.innerText;
    //BOOM
    if (bombe.includes(numCella-1)) {
        this.classList.add("bombed");
        disattivaGriglia(container);
        setTimeout(function() {
            alert("Sei esploso con un punteggio di: " + punteggio)
        }, 50);
    }
    //Un punto
    else {
        console.log("Click su cella ", numCella);
        this.classList.add("clicked");
        punteggio++;
        console.log("Punteggio = " + punteggio)
    };
    //Vittoria
    if (punteggio == 5) {
        disattivaGriglia(container);
        setTimeout(function() {
            alert("Hai vinto! "+punteggio+" punti!")
        }, 50);
    };
};


//Generazione bombe
function generaBombe() {
    let lista = [Math.floor(Math.random()*16)];
    for (let i = 1; i < 16; i++) {
        //Creo numero casuale
        lista[i] = Math.floor(Math.random()*100)    
        //Controllo che non sia presente tra quelli già generati
        doubleCheck = false;
        for (let p = 0; p < i; p++) {
            if (lista[i] == lista[p]) {
                doubleCheck = true
            };
        };
        //Se già presente, decremento contatore per ripetere un iterazione del ciclo
        if (doubleCheck == true) {
            i--;
        }
    };
    return(lista);
};

//Disattivazione griglia
function disattivaGriglia(container) {
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].removeEventListener("click", clickCella)
    };
};
