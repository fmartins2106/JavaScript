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
                        <p>Espécie: ${personagem.species}</p>
                        <p>Status: ${personagem.status}</p>
                    </div>`
            });
        }  
        
    };

    xhttp.open("GET", "https://rickandmortyapi.com/api/character");
    xhttp.send();
}