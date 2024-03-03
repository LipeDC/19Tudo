function logar(){
    var login = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        
        location.href = "inicial.html";
    }
    else{
        alert('Tá errado, amigão!')
    }


}

