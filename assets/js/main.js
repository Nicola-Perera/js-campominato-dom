// CAMPOMINATO

/*
    STEPS:
        utente sceglie livello difficoltà nelle impostazioni
        utente preme tasto play per iniziare la partita
        al click di play salvo il numero del livello
        in base al livello creo la griglia della difficoltà corrispondente:
            difficoltà 1 => tra 1 e 100
            difficoltà 2 => tra 1 e 81
            difficoltà 3 => tra 1 e 49 
        per creare la griglia uso un ciclo che ad ogni giro aggiunge una cella alla dom fino a raggiungere il totale previsto da quel livello
        creo 16 numeri casuali presi dal range della difficoltà
        le celle che sono nella posizione uguale a ciascuno dei numeri casuali è una bomba
        una cella buona se clickata diventa azzurra
        una cella bomba se cliccata diventa rossa
        il gioto termina quando:
            - l'utente ha clickato su una bomba  
            - l'utente ha clickato su tutte le celle buon
        al termine del gioco rivelo solo le celle bombe e dichiaro il punteggio fatto dall'utente sul totale delle celle buone
*/