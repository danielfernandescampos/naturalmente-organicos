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
        var custo = document.createElement('td');
        var custoConteudo = document.createElement('input');
        var total = document.createElement('td');
        var addBtn = document.createElement('td');
        var addBtnConteudo = document.createElement('button');
        var delBtn = document.createElement('td');
        var delBtnConteudo = document.createElement ('img');

        // adiciona os conteúdos
        imgConteudo.src = "../img/banana.png";
        imgConteudo.classList.add("compra-produto-img")
        img.appendChild(imgConteudo);

        nome.textContent = item.textContent;

        quantConteudo.classList.add("compra-produto-input")
        quantConteudo.type = "number"
        quant.appendChild(quantConteudo);

        custoConteudo.classList.add("compra-produto-input")
        custoConteudo.type = "number"
        custo.appendChild(custoConteudo);

        total.textContent = "0" 

        addBtnConteudo.innerHTML = "Adicionar"
        addBtnConteudo.classList.add('add-produto-button')
        addBtn.appendChild(addBtnConteudo);

        delBtnConteudo.src = "../img/delete-icon-2.png";
        delBtnConteudo.classList.add("delete-icon")
        delBtn.appendChild(delBtnConteudo);
          
        // append os childs td na tr
        novoProduto.appendChild(img);
        novoProduto.appendChild(nome);
        novoProduto.appendChild(quant);
        novoProduto.appendChild(custo);
        novoProduto.appendChild(total);
        novoProduto.appendChild(addBtn);
        novoProduto.appendChild(delBtn);

        tabela.appendChild(novoProduto);
       })
    })

