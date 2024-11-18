

 // OTTENGO LE 10 EMAIL

 const getEmails = (maxNum) => {
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
 