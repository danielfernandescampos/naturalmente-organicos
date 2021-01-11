const compra = tabelaCompras.querySelectorAll('.compra-tr');

tabelaCompras.addEventListener ('click', function(event){
    clickCompra(event.target.parentElement)
    })

function clickCompra(compraClicada){
        limpaNegrito();
        limpaTabela();
        compraClicada.classList.add("compra-fornecedor-selecionada"); // coloca em negrito
        
        // confere id com tabela de compras
        const idCompra = compraClicada.getAttribute('data-idcompra');

        // aqui tem que fazer uma request para acessar as compras no banco        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "endereço http");
        xhr.addEventListener('load', function(){
            if(xhr.status == 200) {
                var resposta = xhr.responseText; // a resposta vem no formato string
                var arrayCompras = JSON.parse(resposta) // transformando em json
                //arrayCompras.forEach (item => {
                //  adicionaCompra(item)
            } else{console.log("xmlhttp em desenvolvimento"); console.log(xhr.status)}
        });

            compras.forEach(compra =>{
                if(idCompra == compra.idCompra){                    

                    compra.itemCompra.forEach(itemCompra=>{
                        // pega a tabela no DOM
                        var tabela = document.getElementById('compraProdutoRow');
                        // cria uma nova linha
                        var novoProduto = document.createElement('tr');
                        // cria as colunas da nova linha
                        var img = document.createElement('td');
                        var imgConteudo = document.createElement('img');
                        var nome = document.createElement('td');
                        var quant = document.createElement('td');
                        var quantConteudo = document.createElement('input');
                        var quantoLabel = document.createElement('label');
                        var custo = document.createElement('td');
                        var custoConteudo = document.createElement('input');
                        var total = document.createElement('td');
                        var delBtn = document.createElement('td');
                        var delBtnConteudo = document.createElement ('img');
                        
                        // adiciona os conteúdos através do json de produtos
                        //imgConteudo.src = itemCompra.foto;
                        imgConteudo.classList.add("compra-produto-img")
                        img.appendChild(imgConteudo);
                
                        //nome.textContent = itemCompra.nome;    
                        quantConteudo.classList.add("compra-produto-input");
                        quantConteudo.classList.add("produto-quant");
                        quantConteudo.type = "number";
                        quantConteudo.min = "0";
                        quantConteudo.step = "any";
                        quantConteudo.value = itemCompra.quant;
                        quant.appendChild(quantConteudo);
                        quant.appendChild(quantoLabel);
                
                        custo.textContent = "R$";
                        custoConteudo.classList.add("compra-produto-input");
                        custoConteudo.classList.add("produto-custo");
                        custoConteudo.type = "number"
                        custoConteudo.min = "0";
                        custoConteudo.step = "any";
                        custoConteudo.value = itemCompra.custo;
                        custo.appendChild(custoConteudo);
                
                        total.classList.add("produto-total");
                        //total.textContent = "0";

                        delBtnConteudo.src = "../img/delete-icon-2.png";
                        delBtnConteudo.classList.add("delete-icon");
                        delBtn.appendChild(delBtnConteudo);
    
                        // append os childs td na tr
                        novoProduto.appendChild(img);
                        novoProduto.appendChild(nome);
                        novoProduto.appendChild(quant);
                        novoProduto.appendChild(custo);
                        novoProduto.appendChild(total);
                        novoProduto.appendChild(delBtn);
                        novoProduto.classList.add('produto-tr');
                        tabela.appendChild(novoProduto);

                        // pegando nome e foto da tabela de produtos
                        produtos.forEach(produto=>{
                            if(itemCompra.id == produto.id) {
                                novoProduto.setAttribute('data-idProduto', produto.id);
                                nome.textContent = produto.nome;
                                imgConteudo.src = produto.foto;
                                quantoLabel.textContent = produto.unTipo;
                            }
                        })
                    })

                    // dados da compra - coluna da direita
                    // variáveis coluna dados compra
                    let fornecedorCompra = document.getElementById('selectFornecedor');
                    let dataCompra = document.getElementById('dataCompra');
                    let horaCompra = document.getElementById('horaCompra');
                    let statusCompra = document.getElementById('statusCompra');
                    // colocando os dados
                    fornecedorCompra.value = compra.fornecedor;
                    dataCompra.value = compra.data;
                    horaCompra.value = compra.hora;
                    statusCompra.textContent = compra.status;
                } 
            })

            calculaCustoParcial();
            calculaCustoTotal();
}
