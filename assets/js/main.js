// CAMPOMINATO

/*
    STEPS:
        utente sceglie livello difficoltà nelle impostazioni
        utente preme tasto play per iniziare la partita
        al click di play salvo il numero del livello
        creo 16 numeri casuali presi dal range della difficoltà
        in base al livello creo una griglia quadrata della difficoltà corrispondente:
            difficoltà 1 => tra 1 e 100
            difficoltà 2 => tra 1 e 81
            difficoltà 3 => tra 1 e 49 
        per creare la griglia uso un ciclo che ad ogni giro aggiunge una cella alla dom fino a raggiungere il totale previsto da quel livello
        le celle che sono nella posizione uguale a ciascuno dei numeri casuali è una bomba
        una cella buona se cliccata diventa azzurra
        una cella bomba se cliccata diventa rossa
        il gioco termina quando:
            - l'utente ha cliccato su una bomba  
            - l'utente ha cliccato su tutte le celle buone
        al termine del gioco rivelo solo le celle bombe e dichiaro il punteggio fatto dall'utente sul totale delle celle buone
*/

// dom ref
const start_game = document.getElementById('play_button');
const levelValue = document.getElementById('level');

//default variables
const bombs_position = [];
const bombs_quantity = 16;

start_game.addEventListener('click', function() {
    const level = levelValue.value;
    console.log(level);
    const randomNumber = Math.floor(Math.random() * bombs_quantity) + 1;
    bombs_position.push(randomNumber);
    console.log(bombs_position);
})
