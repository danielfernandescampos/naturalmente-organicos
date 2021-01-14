function checaProdutoRepetido() {
    var produtoTr = document.querySelectorAll('.produto-tr')
    arrayProdutos = []
    produtoTr.forEach(produto=>{
        idProduto = produto.dataset.idproduto;
        arrayProdutos.push(idProduto);
    })

    console.log(`arrayProdutos: ${arrayProdutos}`);
    
    const findDuplicates = (arr) => {
        let sorted_arr = arr.slice().sort(); // slice cria uma cópia do arry e sort ordena o array
        let results = [];
        for (let i = 0; i < sorted_arr.length - 1; i++) {
          if (sorted_arr[i + 1] == sorted_arr[i]) { // compara se o próximo item é igual ao anterior
            results.push(sorted_arr[i]);
          }
        }
        return results;
    }

    console.log(`Repetidos: ${findDuplicates(arrayProdutos)}`);
    
    produtosRepeditos = findDuplicates(arrayProdutos);
    /*produtosRepeditos.forEach(produtoRepetido=>{
                const index = arrayProdutos.indexOf(produtoRepetido);
                if (index > -1) {
                arrayProdutos.splice(index, 1);
                }})*/
                produtoTr.forEach(produto=>{
                    idProduto = produto.dataset.idproduto;
                    //console.log(`produtinhos: ${idProduto}`)  
                        if(produtosRepeditos.includes(idProduto)){ // checa produtos com id == results
                            // pega info dos produtos para média ponderada
                            var quantProduto = produto.querySelector('td:nth-child(4)').textContent;
                            var custoProduto = produto.querySelector('td:nth-child(5)').textContent;
                            // console.log(quantProduto, custoProduto)
                            // faz a média ponderada                            
                            produto.remove()
                            //produto.style.display = "none"; // apaga os produtos repetidos
                        } else {
                            produto.style.display = "table-row"
                            //sumarizaBtn.classList.add('add-produto-button-off');
                        }
                })
                // checar se o produto existe antes de criar
                // if(arrayProdutos.includes(produtoRepetido)){
                    //     console.log("oi")
                    // } else {criaProduto(produtoRepetido);}                    
    //})
    findDuplicates(arrayProdutos).forEach(oi=>{
        criaProduto(oi)
    })

    if(findDuplicates(arrayProdutos).length == 0){
        var produtoSumarizado = document.querySelectorAll('.produto-sumarizado');
        produtoSumarizado.forEach(item=>{
            item.remove();
        })
    }  
        
                
    //console.log(arrayProdutos)
    console.log(`Repetidos2: ${findDuplicates(arrayProdutos)}`)
    /*arrayProdutos.forEach(produto=>{
        criaProduto(produto)
    })*/
            
    // pegando as info dos produtos e apagando as rows


    // pega index do primeiro produto
    
 
    // console.log(findDuplicates(arrayProdutos))

    console.log(`arrayProdutos: ${arrayProdutos}`);
}


function criaProduto(id) {
    produtos.forEach(produto=>{
        if(id == produto.id) {
            // pega a tabela no DOM
            var tabela = document.getElementById('tabelaNovaOferta');
            // cria uma nova linha
            var novoProduto = document.createElement('tr');
            // cria as colunas da nova linha
            var img = document.createElement('td');
            var imgConteudo = document.createElement('img');
            var nome = document.createElement('td');
            var sumariza = document.createElement('td');
            var sumarizaBtn = document.createElement('button');
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
            sumarizaBtn.textContent = "="
            // sumarizaBtn.classList.add('add-produto-button-off');
            sumariza.appendChild(sumarizaBtn);        
            quant.textContent = "soma";
            custo.textContent = "média";
            lucroInput.type = "number";
            lucroInput.min = "0"
            lucroInput.classList.add('compra-produto-input');
            lucro.appendChild(lucroInput);
            lucroInput.value = "35";


            data.textContent = "resolver";
            fornecedor.textContent = "vários";

            // append os childs td na tr
            novoProduto.appendChild(img);
            novoProduto.appendChild(nome);
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
            preco.textContent = "zero";      
        }
    })
}
    
