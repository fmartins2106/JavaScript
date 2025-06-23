function listarTodos() {
    var xhttp = new XMLHttpRequest();

    // definindo o tipo de retorno do meu objeto xhttp
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {

        // status da requisição já retornada para o browser
        if (this.readyState == 4) {
            console.log(xhttp);

            const listaPersonagens = xhttp.response.results;
            const divResultado = document.getElementById('resultado');

            listaPersonagens.forEach(personagem => {
                divResultado.innerHTML +=  `
                    <div class="card">
                        <img src="${personagem.image}" alt="${personagem.name}">
                        <h3>${personagem.name}</h3>
                        <p>ID: ${personagem.id}</p>
                        <p>Espécie: ${personagem.species}</p>
                        <p>Status: ${personagem.status}</p>
                    </div>`
            });
        }  
        
    };

    xhttp.open("GET", "https://rickandmortyapi.com/api/character");
    xhttp.send();

    
}

function listarPorID(){
    var xhttp = new XMLHttpRequest();
    const id = document.getElementById('idPersonagem').value; // ✔ Pega o valor do input
    if(!id){ // ✔ Verifica a variável correta
        alert("Id inválido. Tente novamente.");
        return
    }

    // definindo o tipo de retorno do meu objeto xhttp
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function () {

        // status da requisição já retornada para o browser
        if (this.readyState == 4) {
            const divResultado = document.getElementById('resultado');
            divResultado.innerHTML = ''; // ✔ Limpa o resultado anterior
            if(this.status === 200){
                const personagem = xhttp.response;// ✅ 3. Agora usa o objeto diretamente, pois "/character/:id" retorna um único objeto, e NÃO um array "results" :contentReference[oaicite:1]{index=1}
                divResultado.innerHTML +=  `
                    <div class="card">
                        <img src="${personagem.image}" alt="${personagem.name}">
                        <h3>${personagem.name}</h3>
                        <p>ID: ${personagem.id}</p>
                        <p>Espécie: ${personagem.species}</p>
                        <p>Status: ${personagem.status}</p>
                    </div>`
            }else{
                divResultado.innerHTML = `<p>Personagem não encontrado</p>`
            }
        }  
    };

    xhttp.open("GET", `https://rickandmortyapi.com/api/character/${id}`);
    xhttp.send();
}