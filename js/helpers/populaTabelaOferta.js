function populaTabelaCompras(idCompra){     
    compras.forEach(compra =>{
        if(idCompra == compra.idCompra){
            compra.itemCompra.forEach(itemCompra=>{
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
                
                // adiciona os conteúdos através do json de produtos
                imgConteudo.classList.add("compra-produto-img")
                img.appendChild(imgConteudo);
                sumarizaBtn.textContent = "="
                sumarizaBtn.classList.add('add-produto-button-off');
                sumariza.appendChild(sumarizaBtn);        
                quant.textContent = itemCompra.quant;
                custo.textContent = itemCompra.custo;
                lucroInput.type = "number";
                lucroInput.min = "0"
                lucroInput.classList.add('compra-produto-input');
                lucro.appendChild(lucroInput);
                lucroInput.value = "2"
                preco.textContent = "0";

                data.textContent = compra.data;
                fornecedor.textContent = compra.fornecedor;

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
                tabela.appendChild(novoProduto);
                novoProduto.setAttribute('data-idcompra', idCompra);

                // pegando nome e foto da tabela de produtos
                produtos.forEach(produto=>{
                    if(itemCompra.id == produto.id) {
                        novoProduto.setAttribute('data-idProduto', produto.id);
                        nome.textContent = produto.nome;
                        imgConteudo.src = produto.foto;
                        unVenda.textContent = produto.unVenda;
                    }
                })
            })

            // dados da compra - coluna da direita
            // variáveis coluna dados compra
            // let fornecedorCompra = document.getElementById('selectFornecedor');
            // let dataCompra = document.getElementById('dataCompra');
            // let horaCompra = document.getElementById('horaCompra');
            // let statusCompra = document.getElementById('statusCompra');
            // // colocando os dados
            // fornecedorCompra.value = compra.fornecedor;
            // dataCompra.value = compra.data;
            // horaCompra.value = compra.hora;
            // statusCompra.textContent = compra.status;
        } 
    })

    //calculaCustoParcial();
    //calculaCustoTotal();
    //desabilitaEdicao()
}
