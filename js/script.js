 // il numero massimo di email
 const maxNum = parseInt(prompt('Inserisci il numero di email da visualizzare')); // Rendiamolo un minimo interattivo

 // OTTENGO I COMPONENTI
const $one = document.querySelector.bind(document);

const $tableBody = $one('#table-body');   // Ottieni la tabella dove caricare le mail

const $btnReload = $one('#reload'); // Ottengo il bottone per il ricaricamento delle mail

const spinnerElement = $one('#spinner'); // ottenmgo uno spinner per il caricamento
console.log(spinnerElement);

 // Carica direttamente le prime 10 email
getEmails(maxNum);


// Carichiamo dinamicamente il numero di email da caricare nel testo del bottone
$btnReload.innerText = `Carica altre ${maxNum} Email`;

// Sostituisci le 10 email con altre al click

$btnReload.addEventListener("click", function() {
   $tableBody.innerHTML = ``;
   getEmails(maxNum);
});

