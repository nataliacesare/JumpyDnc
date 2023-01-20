let elementosForm = document.querySelectorAll("input");

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const cpf = document.getElementById("cpf");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    validador();
    });

    function validador(dados) {
                          
       // Se algum dos campos estiver vazio, exibe msg de erro no spam
       if (!username.value) {
        document.getElementById("spanName").style.textAlign = 'right';
        document.getElementById("spanName").innerHTML = "*Campo obrigatório*";
        document.getElementById("spanButton").innerHTML = "*Campos obrigatórios não registrados.*";
        return false;
       }else{
        document.getElementById("spanName").innerHTML = "";
        document.getElementById("spanButton").innerHTML = "";
        
       }

       if (!email.value){
        document.getElementById("spanEmail").style.textAlign = 'right';
        document.getElementById("spanEmail").innerHTML = "*Campo obrigatório*";
        document.getElementById("spanButton").innerHTML = "*Campos obrigatórios não registrados.*";
        return false;
       }else{
        document.getElementById("spanEmail").innerHTML = "";
        document.getElementById("spanButton").innerHTML = "";
       }

       if (!phone.value){
        document.getElementById("spanPhone").style.textAlign = 'right';
        document.getElementById("spanPhone").innerHTML = "*Campo obrigatório*";
        document.getElementById("spanButton").innerHTML = "*Campos obrigatórios não registrados.*";
        return false;
       }else{
        document.getElementById("spanPhone").innerHTML = "";
        document.getElementById("spanButton").innerHTML = "";
       }

      if (!cpf.value){
        document.getElementById("spanCpf").style.textAlign = 'right';
        document.getElementById("spanCpf").innerHTML = "*Campo obrigatório*";
        document.getElementById("spanButton").innerHTML = "*Campos obrigatórios não registrados.*";
        return false;
       }else{
        document.getElementById("spanCpf").innerHTML = "";
        document.getElementById("spanButton").innerHTML = "";
       }

       if (!password.value){
        document.getElementById("spanPassword").style.textAlign = 'right';
        document.getElementById("spanPassword").innerHTML = "*Campo obrigatório*";
        document.getElementById("spanButton").innerHTML = "*Campos obrigatórios não registrados.*";
        return false;
       }else{
        document.getElementById("spanPassword").innerHTML = "";
        document.getElementById("spanButton").innerHTML = "";
       }

       document.getElementById("spanButton").innerHTML = "Sucesso!";
       document.getElementById("spanButton").style.color = '#2cd62c';    
       
       console.log(elementosForm);
      
       return true;
      }