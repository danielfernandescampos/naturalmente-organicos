function populaOfertaHome(){
    apagaProdutos();
    criaItemOferta(ofertaDoDia);
}

function apagaProdutos() {
    var produtos = document.querySelectorAll('.produto')
    produtos.forEach(produto=>
    produto.remove())
}

function criaItemOferta(oferta) {
    var divProdutos = document.querySelector('.produtos');
    oferta.itemOferta.forEach(item=>{

        var novoProduto = document.createElement('div');
        var img = document.createElement('img');
        var titulo = document.createElement('h4');
        var preco = document.createElement('p');
        var unVenda = document.createElement('p');
        var btnDel = document.createElement('button');
        var input = document.createElement('input');
        var btnAdd = document.createElement('button');

        novoProduto.setAttribute('data-idproduto', item.id);
        preco.textContent = "R$ " + (item.preco).toFixed(2);
        produtos.forEach(produto=>{
            if(produto.id == item.id) {
                img.src = produto.foto;
                titulo.textContent = produto.nome;
                var unTipo = produto.unTipo;
                var unVendaProduto = produto.unVenda
                if (unVendaProduto < 1 && unTipo == "kg"){
                    unVendaProduto = unVendaProduto * 1000
                    unTipo = "g"
                }
                unVenda.textContent = unVendaProduto + " " + unTipo;
                btnAdd.textContent = "+"
                btnDel.textContent = "-"
                input.value = 0;
            }
        })
        novoProduto.classList.add('produto');
        img.classList.add('produto__img');
        //console.log(divProdutos)
        titulo.classList.add('produto__titulo');
        preco.classList.add('produto__preco');
        unVenda.classList.add('produto__unidade');
        btnAdd.classList.add('produto__botao');
        btnAdd.classList.add('addBtn');
        input.classList.add('produto__quantidade');
        input.classList.add('compra-produto-input');
        input.type = "number";
        input.min = "0";
        btnDel.classList.add('produto__botao');
        btnDel.classList.add('delBtn');

        divProdutos.appendChild(novoProduto);
        novoProduto.appendChild(img);
        novoProduto.appendChild(titulo);
        novoProduto.appendChild(preco);
        novoProduto.appendChild(unVenda);
        novoProduto.appendChild(btnDel);
        novoProduto.appendChild(input);
        novoProduto.appendChild(btnAdd);
        })
}

populaOfertaHome()
