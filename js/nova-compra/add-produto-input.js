// variáveis
var input = document.getElementById("addProduto");
var filter = input.value.toUpperCase();
var ul = document.getElementById("inputDiv");
var li = document.querySelectorAll(".produtoLista");

// abrindo a busca do input
input.addEventListener('keyup', function(e){
    if(this.value.length == 0) {ul.style.display = "none";}
    if( this.value.length < 3 ) return;
    const termoDigitado = e.target.value.toUpperCase();
    Array.from(li).forEach(function(liProduto){
        const nomeProduto = liProduto.textContent;
        if(nomeProduto.toUpperCase().indexOf(termoDigitado)!=-1){
            ul.style.display = "block";
            liProduto.style.display = "block";
        } else {
            liProduto.style.display = "none";
        }
    })
})

// clicando no produto da pesquisa e adicionando
li.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
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

        // checa o id do item com o id do json de produtos:
        // pega data-id do item clicado
        const idProduto = item.getAttribute('data-id');
        // correndo array de produtos 
        produtos.forEach((item) =>{
            if(idProduto == item.id) {
                // adiciona os conteúdos através do json de produtos
                imgConteudo.src = item.foto;
                imgConteudo.classList.add("compra-produto-img")
                img.appendChild(imgConteudo);
        
                nome.textContent = item.nome;
                
                quantConteudo.classList.add("compra-produto-input");
                quantConteudo.classList.add("produto-quant");
                quantConteudo.type = "number";
                quantConteudo.min = "0";
                quantConteudo.step = "any";
                quant.appendChild(quantConteudo);
                quantoLabel.textContent = item.unTipo;
                quant.appendChild(quantoLabel);
        
                custo.textContent = "R$";
                custoConteudo.classList.add("compra-produto-input");
                custoConteudo.classList.add("produto-custo");
                custoConteudo.type = "number"
                custoConteudo.min = "0";
                custoConteudo.step = "any";
                custo.appendChild(custoConteudo);
        
                total.classList.add("produto-total");
                total.textContent = "0";
        
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
            }
        })

        input.value = "";
        ul.style.display = "none";

    })
})

    /*pegar o nome do produto no click, correr o array de objetos comparando e quando achar pegar as informações*/

