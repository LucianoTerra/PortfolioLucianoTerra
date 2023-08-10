function validactionForm() {
    let validactionCod = document.forms["register"]["cod"].value;
    let validactionDate = document.forms["register"]["date"].value;
    let validactionEquipe = document.forms["register"]["equipe"].value;
    let validactionTamanho = document.forms["register"]["tamanho"].value;
    let validactionRadio = document.forms["register"]["radio"].value;

    if(validactionCod =="") {
      alert("O Nome deve ser preenchido");
      return false;
    }
    if(validactionDate =="") {
        alert("A data de nascimento deve ser preenchida");
        return false;
    }
    if(validactionEquipe =="") {
        alert("O Nome da Equipe deve ser preenchido");
        return false;
    }
    if(validactionTamanho =="") {
        alert("O tamanho da camiseta deve ser preenchido");
        return false;
    }
    if(validactionRadio =="") {
        alert("O Gênero deve ser assinalado");
        return false;
    }
}
function insert() {
 let cod = document.forms["register"]["cod"].value;
 let date = document.forms["register"]["date"].value;
 let equipe = document.forms["register"]["equipe"].value;
 let tamanho = document.forms["register"]["tamanho"].value;
 let radio = document.forms["register"]["radio"].value;

 let insert = window.document.getElementById("insertRow");
 
 insert.innerHTML = `
 <th scope='row'>${cod}</th>
 <td>${date}</td>
 <td>${equipe}</td>
 <td>${tamanho}</td>
 <td>${radio}</td>
 `;

}