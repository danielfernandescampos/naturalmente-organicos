function checaProdutoRepetido() {
    // pega itens da tabela populada com duplicatas após o click
    var produtoTr = document.querySelectorAll('.produto-tr')
    arrayProdutos = []
    // cria array com id de todos os produtos
    produtoTr.forEach(produto=>{
        idProduto = produto.dataset.idproduto;
        if (produto.classList.contains('produto-sumarizado')){
          console.log('oi')
          }
          arrayProdutos.push(idProduto);
    })
    // descobre os itens duplicados
    const findDuplicates = (arr) => {
        let sorted_arr = arr.slice().sort(); // slice cria uma cópia do array e sort ordena o array
        let results = [];
        for (let i = 0; i < sorted_arr.length - 1; i++) {
          if (sorted_arr[i + 1] == sorted_arr[i] && !results.includes(sorted_arr[i])) { // compara se o próximo item é igual ao anterior
            results.push(sorted_arr[i]);
          }
        }
        return results;
    }

    produtosRepeditos = findDuplicates(arrayProdutos);
    //console.log(`produtosRepetidos: ${produtosRepeditos}`);       
    // pega os dados dos produtos duplicados para fórmula da média
    arrayProdutosDuplicados = []; // reunindo a info de todos os produtos duplicados
    produtoTr.forEach(produto=>{
        idProduto = produto.dataset.idproduto;
        //console.log(`produtinhos: ${idProduto}`)  
            if(produtosRepeditos.includes(idProduto)){ // checa produtos com id == results
                // pega info dos produtos para média ponderada
                var objProduto = new Object();
                objProduto.id = idProduto;
                objProduto.quant = produto.querySelector('.pr-quant').textContent;
                objProduto.custo = produto.querySelector('.pr-custo').textContent;
                arrayProdutosDuplicados.push(objProduto);                          
                //produto.remove()
                produto.classList.add('invisivel');
                produto.classList.remove('produto-tr');
            }
        })
        // console.log(arrayProdutosDuplicados)
        // transformando os obj iguais em um e aplicando a fórmula de média
        const produtosSumarizados = arrayProdutosDuplicados.reduce((acc, curr) => {
            // procura no acc o produto repetido
            const duplicatedProduct = acc.find(item => item.id === curr.id);
            // verifica o tamanho da lista de produtos repetidos
            // se tiver produto duplicado
            if (duplicatedProduct) {
              // soma as quantidades
              const newQuant = parseFloat(duplicatedProduct.quant) + parseFloat(curr.quant);
              // soma os custos
              const newCusto = (parseFloat(duplicatedProduct.custo)*parseFloat(duplicatedProduct.quant) + parseFloat(curr.custo)*parseFloat(curr.quant))/newQuant;
              // altera o produto existente na lista final para ter a quantidade e o custo final 
              acc.forEach(item => {
                if (item.id === duplicatedProduct.id) {
                  item.quant = newQuant;
                  item.custo = newCusto.toFixed(2);
                }
              });
              return acc;
            }  
            // se não tiver produto duplicado
            acc.push(curr);
            return acc;
          }, []);
          //console.log(produtosSumarizados);
    // cria novo produto com os duplicados
    produtosSumarizados.forEach(obj=>{
        criaProduto(obj)
    })  
}

function criaProduto(obj) {
    produtos.forEach(produto=>{
        if(obj.id == produto.id) {
            // pega a tabela no DOM
            var tabela = document.getElementById('tabelaNovaOferta');
            // cria uma nova linha
            var novoProduto = document.createElement('tr');
            // cria as colunas da nova linha
            var img = document.createElement('td');
            var imgConteudo = document.createElement('img');
            var nome = document.createElement('td');
            var sumarizaCheck = document.createElement('td');
            var sumarizaInput = document.createElement('input');
            var sumariza = document.createElement('td');
            var sumarizaBtn = document.createElement('img');
            var quant = document.createElement('td');
            var custo = document.createElement('td');
            var lucro = document.createElement('td');
            var lucroInput = document.createElement('input');
            var preco = document.createElement('td');
            var unVenda = document.createElement('td');
            var data = document.createElement('td');
            var fornecedor = document.createElement('td');
            
            // adiciona os conteúdos 
            imgConteudo.classList.add("compra-produto-img")
            img.appendChild(imgConteudo);
            sumarizaCheck.appendChild(sumarizaInput);
            sumarizaInput.type = "checkbox";
            sumarizaInput.classList.add("sumariza-check-off");
            sumarizaBtn.src = "../img/sumariza-btn.png";
            sumarizaBtn.classList.add('sumariza-btn');
            // sumarizaBtn.classList.add('add-produto-button-off');
            sumariza.appendChild(sumarizaBtn);        
            quant.textContent = obj.quant;
            custo.textContent = obj.custo;
            lucroInput.type = "number";
            lucroInput.min = "0"
            lucroInput.classList.add('compra-produto-input');
            lucro.appendChild(lucroInput);
            lucroInput.value = "35";

            quant.classList.add('pr-quant');
            custo.classList.add('pr-custo'); 
            lucroInput.classList.add('pr-lucro');
            preco.classList.add('pr-preco');
            unVenda.classList.add('pr-unvenda');

            data.textContent = "Vários";
            fornecedor.textContent = "Vários";

            // append os childs td na tr
            novoProduto.appendChild(img);
            novoProduto.appendChild(nome);
            novoProduto.appendChild(sumarizaCheck);
            novoProduto.appendChild(sumariza);
            novoProduto.appendChild(quant);
            novoProduto.appendChild(custo);
            novoProduto.appendChild(lucro);
            novoProduto.appendChild(preco);
            novoProduto.appendChild(unVenda);
            novoProduto.appendChild(data);
            novoProduto.appendChild(fornecedor);
            novoProduto.classList.add('produto-tr');
            novoProduto.classList.add('produto-sumarizado');
            tabela.appendChild(novoProduto);
            //novoProduto.setAttribute('data-idcompra', idCompra);

            // pegando nome e foto da tabela de produtos
            novoProduto.setAttribute('data-idProduto', produto.id);
            nome.textContent = produto.nome;
            imgConteudo.src = produto.foto;
            unVenda.textContent = produto.unVenda;
            preco.textContent = (obj.custo*produto.unVenda*1.35).toFixed(2);      
        }
    })
}
    
