var sacolaBtn = document.querySelector('.sacolaBtn');

sacolaBtn.addEventListener('click', function(){
    produtosSacola = document.querySelectorAll('.produto__sacola')
    produtosSacola.forEach (item=>{
        item.remove();
    })
    criaItensSacola(arraySacola);
    calculaTotalSacola();
})

function criaItensSacola(array){
    array.forEach(item=>{
        
        var divSacola = document.querySelector('.sacola__container-produtos');
        var divProduto = document.createElement('div');
        divProduto.setAttribute('data-idproduto', item.id);
        divProduto.classList.add('produto__sacola');
        var img = document.createElement('img');
        img.classList.add('produto__sacola-img')
        var divInfo = document.createElement('div');
        divInfo.classList.add('produto__info--container')
        var titulo = document.createElement('h4');
        titulo.classList.add('produto__titulo');
        var divComandos = document.createElement('div'); 
        divComandos.classList.add('produto__sacola-comandos');
        var menosBtn = document.createElement('button');
        menosBtn.classList.add('produto__botao');
        menosBtn.classList.add('menosBtn');
        var quant = document.createElement('input');
        quant.classList.add('produto__quantidade');
        quant.type = "number";
        quant.min = "0";
        var maisBtn = document.createElement('button');
        maisBtn.classList.add('produto__botao');
        maisBtn.classList.add('maisBtn');
        var delIcon = document.createElement('img');
        delIcon.classList.add('produto__delete');
        var divPreco = document.createElement('div');
        divPreco.classList.add('produto__preco--container');
        var unQuant = document.createElement('p');
        unQuant.classList.add('produto__sacola-unidade');
        var preco = document.createElement('p');
        preco.classList.add('produto__sacola-preco')
        var unVenda;
        var unTipo;
        var precoProduto = parseFloat(item.preco);
        
        quant.value = item.quant;
        
        menosBtn.textContent = '-';
        maisBtn.textContent = '+';
        delIcon.src = "../img/lixeirinha-icon.png";
        produtos.forEach(produto=>{
            if(produto.id == item.id){
                img.src = produto.foto;
                titulo.textContent = produto.nome;
                unTipo = produto.unTipo;
                unVenda = produto.unVenda;
                if(unVenda < 1 && unTipo == "kg") {
                    unVenda = parseFloat(unVenda) * 1000
                    unTipo = "g"
                }
                unQuant.textContent = (unVenda * quant.value) + " " + unTipo;
            }
            preco.textContent = 'R$ ' + (parseInt(quant.value) * precoProduto).toFixed(2);
        })

        divSacola.appendChild(divProduto);
        divProduto.appendChild(img);
        divProduto.appendChild(divInfo);
        divProduto.appendChild(divPreco);
        divInfo.appendChild(titulo);
        divInfo.appendChild(divComandos);
        divComandos.appendChild(menosBtn);
        divComandos.appendChild(quant);
        divComandos.appendChild(maisBtn);
        divComandos.appendChild(delIcon);
        divPreco.appendChild(unQuant);
        divPreco.appendChild(preco);
    })
};

var numberPattern = /\d+[.]\d+/g; // pega só o número no preço
function calculaTotalSacola(){
    var pedidoTotal = document.querySelector('.pedido-total');
    var produtosSacola = document.querySelectorAll('.produto__sacola')
    arrayTotais = [];
    produtosSacola.forEach(produto=>{
        var preco = produto.querySelector('.produto__sacola-preco').textContent;
        preco = preco.match(numberPattern).join('');
        preco = parseFloat(preco);
        arrayTotais.push(preco);
    })

    const totalSacola = arrayTotais.reduce((acc, curr) => acc + curr, 0);
    pedidoTotal.textContent = "Total: " + "R$ " + totalSacola.toFixed(2);
}
