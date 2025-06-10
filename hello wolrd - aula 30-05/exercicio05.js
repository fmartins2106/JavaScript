      const produto = [];

      function atualizarLista(){
        document.getElementById("lista").innerText = "Lista ["+produto.join(", ")+"]";
      }

      function addFinalLista(){
        const nome = document.getElementById("nomeProduto").value.trim();
        if(nome){
            produto.push(nome);
            atualizarLista();
        }
      }

      function addProdutoInicioLista(){
        const nome = document.getElementById("nomeProduto").value.trim();
        if(nome){
            produto.unshift(nome);
            atualizarLista();
        }
      }

      function removerUltimoLista(){
        produto.pop();
        atualizarLista();
      }

      function removerPrimeiroLista(){
        produto.shift();
        atualizarLista();
      }

      function removerElementoPosicaoEspecifica(){
        const posicao = document.getElementById("posicao").value.trim();
        if(!isNaN(posicao) && posicao >= 0 || posicao <= produto.length){
            produto.splice(posicao,1);
            atualizarLista();
            return;
        }
        console.log("Número inválido, tente novamente.")
      }

      function inserirElementoPosicaoEspecifica(){
        const nome = document.getElementById("nomeProduto").value.trim();
        const posicao = document.getElementById("posicao").value.trim();
        if(!isNaN(posicao) && posicao >=0 || posicao <= produto.length){
            produto.splice(posicao,0,nome);
            atualizarLista();
            return;
        }
        console.log("Número inválido, tente novamente.");
      }
      