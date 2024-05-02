Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Soluzione EMAIL:
1. su html creare un campo in cui l'utente possa inserire un indirizzo email e un button per far partire la verifica dell'email.
2. sul JS creare un array con n elementi quante sono le email valide e un ciclo for che controlli se l'email inserita corrisponde a una di quelle nella lista. Se è valida compare un button che rimanda al secondo html del gioco 

Soluzione DADI:
1. su html inserire un button per lanciare i dadi
2. su JS al quando viene cliccato il button genera 2 numeri random da 1 a 6 (player e cpu)
3.se player>cpu scrive "complimenti hai vinto"
4.se cpu>player scrive "ritenta, sarai più fortunato"
5. se player==cpu scrive "pari, quante possibilità c'erano che succedesse?"