const lista = [];

function verificarParImpar(){
    const valor = document.getElementById("numero").value.trim();
    if(valor === "" || isNaN(valor)){
        alert("Valor inválido. Digite um número válido.");
        return;
    }
    const numero  = parseInt(valor);
    lista.push(numero);

    const divPares = document.getElementById("listaPares");
    const divImpares = document.getElementById("listaImpares");
     // Limpa as divs antes de atualizar a lista
    divPares.innerHTML = "";
    divImpares.innerHTML = "";
    
// Atualiza as divs com base na lista completa
lista.forEach(n => {
    if(n % 2 === 0){
        divPares.innerHTML += `<p>${n}</p>`;
        return;
    }
    divImpares.innerHTML += `<p>${n}</p>`
});
document.getElementById("numero").value = "";
document.getElementById("numero").focus();
}