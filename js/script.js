// Creazione griglia
const container = document.getElementById("container");
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

//Funzioni
function impostaCella(cella, i) {
    cella.classList.add("cella");
    console.log(cella, cella.classList);
    cella.innerText = i + 1;
    return(cella);
}

function clickCella() {
    numCella = this.innerText;
    console.log("Click su cella ", numCella);
    this.classList.add("clicked");
}
