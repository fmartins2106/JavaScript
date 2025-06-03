function cadastrarPessoa(){
    const inputEmail = document.getElementById("email");
    const inputSenha = document.getElementById("senha");

    const email = String(inputEmail.value);
    const senha = String(inputSenha.value);


    if(email && senha == "admin"){
        alert(`Usuário logado com sucesso! com o email: " ${inputEmail.value}`);
    }else {
        alert("Usuário ou senhas incorretos.");
    }

    
}