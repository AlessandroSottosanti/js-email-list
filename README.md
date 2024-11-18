### Esercizio Email list

## Dati
- API per la richiesta di 1 email casuale;
- generare 10 indirizzi email;
- otteniemo gli elementi su cui andremo ad elaborare le modifiche:
    - lista email;
    - bottone per il ricaricamento delle email.

## Esecuzione Logica
- Dichiariamo in una variabile il numero massimo di email che vogliamo;
- Inizializziamo un'arrow function che contenga la logica per ottenere le 10 Email:
    - Creiamo un ciclo for al suo interno con MaxNum come (Parametro in ingresso) numero limite di iterazioni;
    - Salviamo il numero dell'elemento corrente per mostrarlo con la mail corrente;
    - tramite "Axios" eseguiamo una chiamata API per ottenere una Email random alla fake API di boolean;
    - salviamo il dato di risposta in una variabile;
    - eseguiamo un InnerHTML al componente che mostra la lista delle email (nel mio caso una semplice tabella) passando un elemento della lista con all'interno il valore precedentemente ottenuto e salvato preceduto dal suo numero (l'indice aumentato di uno salvato precedentemente);
-  Chiamiamo la funzione per ottenere le prime 10 email nella lista;

- Aggiuingiamo un eventListener ad un bottone adempito per il ricaricamento degli elementi nella lista;
    - nell'event listener osserviamo l'evento di click: 
        - al suo interno inniettiamo un html vuoto dentro la lista di email in modo da rimuovere quelli inseriti precedentemente;
        - Chiamiamo nuovamente la funzione per ottenere le email.

## Output

Mostreremo in schermo la lista di email ottenute tramite API dentro una tabella stilizzata.