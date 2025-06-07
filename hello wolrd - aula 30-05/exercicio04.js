function cadastrarProduto(){
    const IDproduto = String(document.getElementById("IdProduto").value);
    const inputPreco = Number(document.getElementById("preco").value);
    const inputDescricao = String(document.getElementById("descricao").value);

    const produto = {
        Código:IDproduto,
        preco:inputPreco,
        descricao:inputDescricao 
    };
    return produto;
}

function gerarCard(){
    const box = document.getElementById("box");
    const card = document.getElementById("div");
    card.innerHTML = `<div class="card">
        <h2>${produto.descrição}</h2>
        <p><strong>Código:</strong>${produto.codigo}</p>
        <p><strong>Preço:</strong>${produto.preco}</p>
        <p><strong>Descrição:</strong>${produto.descrição}</p>
</div>`;
    const divBox = document.getElementById("box");
    divBox.innerHTML += card;
}


