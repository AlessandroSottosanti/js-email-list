 // il numero massimo di email
 const maxNum = 10;

 // OTTENGO I COMPONENTI
const $one = document.querySelector.bind(document);

const $tableBody = $one('#table-body');   // Ottieni la tabella dove caricare le mail

const $btnReload = $one('#reload'); // Ottengo il bottone per il ricaricamento delle mail

 // Carica direttamente le prime 10 email
getEmails(maxNum);


// Carichiamo dinamicamente il numero di email da caricare nel testo del bottone
$btnReload.innerText = `Carica altre ${maxNum} Email`;

// Sostituisci le 10 email con altre al click

$btnReload.addEventListener("click", function() {
   $tableBody.innerHTML = ``;

   getEmails(maxNum);
});

