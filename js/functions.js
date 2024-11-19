

 // OTTENGO LE 10 EMAIL

 const getEmails = (maxNum) => {
    for (let i = 0; i < maxNum; i++) {
      spinnerElement.style.display = 'block';
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

         if(curElementNum === maxNum){
            spinnerElement.style.display = 'none';
          }
    
       });

       

     }
  }
 