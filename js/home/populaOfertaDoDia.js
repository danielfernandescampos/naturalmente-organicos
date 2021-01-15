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
        var btnAdd = document.createElement('button');
        var input = document.createElement('input');
        var btnDel = document.createElement('button');

        novoProduto.setAttribute('data-idproduto', item.id);
        preco.textContent = item.preco
        produtos.forEach(produto=>{
            if(produto.id == item.id) {
                img.src = produto.foto;
                titulo.textContent = produto.nome;
                unVenda.textContent = produto.unVenda;
            }
        })
        novoProduto.classList.add('produto');
        img.classList.add('produto__img');
        //console.log(divProdutos)
        titulo.classList.add('produto__titulo');
        preco.classList.add('produto__preco');
        unVenda.classList.add('produto__unidade');
        btnAdd.classList.add('produto__botao');
        input.classList.add('produto__quantidade');
        input.type = "number";
        input.min = "0";
        btnDel.classList.add('produto__botao');

        divProdutos.appendChild(novoProduto);
        novoProduto.appendChild(img);
        novoProduto.appendChild(titulo);
        novoProduto.appendChild(preco);
        novoProduto.appendChild(unVenda);
        novoProduto.appendChild(btnAdd);
        novoProduto.appendChild(input);
        novoProduto.appendChild(btnDel);
        })
}

populaOfertaHome()
