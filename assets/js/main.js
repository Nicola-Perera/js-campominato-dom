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

start_game.addEventListener('click', function() {

    const level = levelValue.value;
    const bombs_quantity = 16;
    console.log(level);

    grid_elementsPosition∫ (level, bombs_quantity);

})

// my function utilities
function grid_elementsPosition (level, bombs_quantity) {
    let gridArea;

    // gridArea arrange based on difficutly level
    if (level == 1) {
        gridArea = 100;
    }
    else if (level == 2) {
        gridArea = 81;
    }
    else if (level == 3) {
        gridArea = 49;
    }
    console.log(gridArea);
    
    // create random positions for the bombs based on difficulty level
    const bombs_position = [];
    const bombsPositionRange = gridArea;
    while (bombs_position.length < bombs_quantity) {
        
        const randomNumber = Math.floor(Math.random() * bombsPositionRange) + 1;
        if (!bombs_position.includes(randomNumber)) {

            bombs_position.push(randomNumber);
        }
    }
}

