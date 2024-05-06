Obbiettivo generale: 
1) Basandosi su codice già fatto, generare 16 numeri casuali (bombe).
2) Quando l'utente clicca su di una cella, controllare se la cella corrisponde ad una bomba ed in tal caso colorare la cella di rosso ed inviare un messaggio di termine del gioco; se la cella non è una bomba, si colora di azzurro e l'utente guadagna un punto.
3) La partita termina quando il giocatore clicca su di una bomba o ha rivelato tutte le celle senza bombe.
4) Al termine della partita viene annunciato il punteggio.

----------------------------------------------------------

PARTENZA (milestone 0): 
La griglia deve essere generata al click di un pulsante.

MILESTONE #1
Generare 16 numeri casuali e non ripetuti, che corrispondano a celle esistenti.

MILESTONE #2
Aggiungere controllo al click:
- in caso di bomba la cella diventa rossa e la partita termina;
- in caso contrario la cella diventa azzurra.

MILESTONE #3
Gestire il punteggio così che si incrementi rendendo celle azzurre e si resetti all'avvio di una nuova partita.
Il punteggio deve essere stampato ad ogni click su una cella azzurra.

MILESTONE #4
Gestire il caso di click su una bomba (game over):
- Segnalare punteggio;
- Disattivare il click sulle celle.

MILESTONE #5
Gestire il caso di vittoria (tutte le celle senza bombe sono cliccate).