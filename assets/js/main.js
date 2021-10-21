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

    // difficulty level picked by the user
    const level = levelValue.value;
    const bombs_quantity = 16;
    console.log(level);

    // field dimension
    const gridArea = currentLevelField (level);
    console.log(gridArea);

    // bombs position
    const bombs_position = whereYouBoom (gridArea, bombs_quantity);
    console.log(bombs_position);

    // grid build
    cellsPositioning (gridArea, bombs_position);


})

// MY FUNCTIONS UTILITY
//function to give grid dimension
function currentLevelField (level) {
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

    return (gridArea);
}
//function to insert randomly a certain quantity of bombs into a grid
function whereYouBoom (gridArea, bombs_quantity) {
    
    // create random positions for the bombs based on difficulty level
    const bombs_position = [];
    const bombsPositionRange = gridArea;
    while (bombs_position.length < bombs_quantity) {
        
        const randomNumber = Math.floor(Math.random() * bombsPositionRange) + 1;
        if (!bombs_position.includes(randomNumber)) {

            bombs_position.push(randomNumber);
        }
    }
    return (bombs_position);
}
//function to build and add cells to a grid
function cellsPositioning (gridArea, bombs_position) {
    const gridRef = document.getElementById('grid');
    gridRef.className = `level_${level}`;

    // loop to add cells to grid
    for (let i = 1; i <= gridArea; i++) {
        
        const cell = document.createElement('div');
        cell.innerHTML = `<h1>${i}</h1>`

        if (bombs_position.includes(i)) {
            cell.className = 'grid_cell bomb';
        }
        else {
            cell.className = 'grid_cell safe';
        }
        
        gridRef.append(cell);

        // function to change bg color on clickß
        cell.addEventListener('click', function () {
            this.style.backgroundColor = 'green';
        })

}

}


