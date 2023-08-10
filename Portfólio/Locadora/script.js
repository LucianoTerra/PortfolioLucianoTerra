function validactionForm() {
    let validactionCod = document.forms["register"]["cod"].value;
    let validactionTitle = document.forms["register"]["title"].value;
    let validactionDirector = document.forms["register"]["director"].value;
    let validactionDate = document.forms["register"]["date"].value;
    let validactionActor = document.forms["register"]["actor"].value;
    let validactionNote = document.forms["register"]["note"].value;
    let validactionRadio = document.forms["register"]["radio"].value;

    if(validactionCod =="") {
      alert("O código deve ser preenchido");
      return false;
    }
    if(validactionTitle =="") {
        alert("O título deve ser preenchido");
        return false;
    }
    if(validactionDirector =="") {
        alert("O Nome do Diretor deve ser preenchido");
        return false;
    }
    if(validactionDate =="") {
        alert("A Data deve ser preenchida");
        return false;
    }
    if(validactionActor =="") {
        alert("O Nome do ator/atriz deve ser preenchida");
        return false;
    }
    if(validactionNote =="") {
        alert("A nota deve ser preenchida");
        return false;
    }
    if(validactionRadio =="") {
        alert("O Gênero deve ser assinalado");
        return false;
    }
}
function insert() {
 let cod = document.forms["register"]["cod"].value;
 let title = document.forms["register"]["title"].value;
 let director = document.forms["register"]["director"].value;
 let date = document.forms["register"]["date"].value;
 let actor = document.forms["register"]["actor"].value;
 let note = document.forms["register"]["note"].value;
 let radio = document.forms["register"]["radio"].value;

 let insert = window.document.getElementById("insertRow");
 
 insert.innerHTML = `
 <th scope='row'>${cod}</th>
 <td>${title}</td>
 <td>${director}</td>
 <td>${date}</td>
 <td>${actor}</td>
 <td>${note}</td>
 <td>${radio}</td>
 `;

}