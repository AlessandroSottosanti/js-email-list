 // il numero più alto vince
 const maxNum = 10;

 // OTTENGO I COMPONENTI
const $one = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const $tableBody = $one('#table-body');   // Ottieni la tabella dove caricare le mail

const $btnReload = $one('#reload'); // Ottengo il bottone per il ricaricamento delle mail

console.log($tableBody);
console.log($btnReload);


 // OTTENGO LE 10 EMAIL

 const getEmails = () => {
   for (i = 0; i < maxNum; i++) {
      let curElementNum = i + 1;
      axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
         const email = resp.data.response;
         console.log(email);
   
   
         // Stampale nella tabella
         $tableBody.innerHTML += `
          <tr>
           <th scope="row">${curElementNum}</th>
           <td>${email}</td>
         </tr>
        `;
   
         
      });
   
    }
 }


 // Carica direttamente le prime 10 email
getEmails();

$btnReload.addEventListener("click", function() {
   $tableBody.innerHTML = ``;

   getEmails();
});

