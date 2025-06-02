function cadastrarPessoa(){
    const inputEmail = document.getElementById("email");
    const inputSenha = document.getElementById("senha");

    const email = String(inputEmail.value);

    alert("Usuário logado com sucesso! com o email: "+email);
}