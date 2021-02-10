function alteraQtdSacola() { //é chamada no botao-sacola.js depois que cria os itens da sacola
    var addBtnSacola = document.querySelectorAll('.maisBtn');
    var delBtnSacola = document.querySelectorAll('.menosBtn');
    var lixeirinha = document.querySelectorAll('.produto__delete');
    
    addBtnSacola.forEach(btn=>{
        btn.addEventListener('click', function(){
            botaoMais2(arraySacola, btn)
            calculaTotalSacola();
        })
    })
    
    delBtnSacola.forEach(btn=>{
        btn.addEventListener('click', function(){
            botaoMenos2(arraySacola, btn)
            calculaTotalSacola();
        })
    })

    lixeirinha.forEach(btn=>{
        btn.addEventListener('click', function(){
            btn.parentElement.parentElement.parentElement.remove();
            calculaTotalSacola();
            var btnId = btn.parentElement.parentElement.parentElement.dataset.idproduto;
            var produtosOferta = document.querySelectorAll('.produto');
            produtosOferta.forEach(produto=>{
                if (produto.dataset.idproduto == btnId) {
                    produto.querySelector('input').value = 0;
                    console.log(arraySacola)
                    for( var i = 0; i < arraySacola.length; i++){ //deletando item do arraySacola
                        if ( arraySacola[i].id == btnId) {
                            arraySacola.splice(i, 1); 
                            checaArraySacola(arraySacola)
                        }            
                    }  
                }
            })
        })
    })
}

//var numberPattern = /\d+[.]\d+/g; // pega só o número no preço

function botaoMais2(array, botao){
    var input = botao.parentElement.querySelector('input');
    var preco = botao.parentElement.parentElement.parentElement.querySelector('.produto__sacola-preco');
    const idProduto = botao.parentElement.parentElement.parentElement.dataset.idproduto;
    input.value = parseInt(input.value) + 1; // altera input
    var un = botao.parentElement.parentElement.parentElement.querySelector('.produto__sacola-unidade');
    un.textContent = pegaUnProduto(idProduto).unVenda * input.value + " " + pegaUnProduto(idProduto).unTipo;
    
    ofertaDoDia.itemOferta.forEach(item=>{ // pega o preço do produto
        if(item.id == idProduto) {
            preco.textContent = "R$ "+(item.preco * input.value).toFixed(2);
        }
    })
    var produtosOferta = document.querySelectorAll('.produto'); //altera inputs da home
            produtosOferta.forEach(produto=>{
                if (produto.dataset.idproduto == idProduto) {
                    produto.querySelector('input').value = input.value;
                }
            })
    const itemCarrinho = array.find(item => item.id === idProduto); // procura no arraySacola se já adicionou produto
        if (itemCarrinho) {
            itemCarrinho.quant = input.value;
        }
    checaArraySacola(array)
};

function botaoMenos2(array, botao){
    var input = botao.parentElement.querySelector('input');
    const idProduto = botao.parentElement.parentElement.parentElement.dataset.idproduto;
    if (input.value > 0) {
        input.value = input.value - 1; //altera input da sacola
        var un = botao.parentElement.parentElement.parentElement.querySelector('.produto__sacola-unidade');
    un.textContent = pegaUnProduto(idProduto).unVenda * input.value + " " + pegaUnProduto(idProduto).unTipo;
        var preco = botao.parentElement.parentElement.parentElement.querySelector('.produto__sacola-preco');
        ofertaDoDia.itemOferta.forEach(item=>{ // pega o preço do produto
            if(item.id == idProduto) {
                preco.textContent = "R$ "+(item.preco * input.value).toFixed(2);
            }
        })
        var produtosOferta = document.querySelectorAll('.produto'); //altera inputs da home
            produtosOferta.forEach(produto=>{
                if (produto.dataset.idproduto == idProduto) {
                    produto.querySelector('input').value = input.value;
                }
            })

        var itemCarrinho = array.find(item => item.id === idProduto);
        if (itemCarrinho) {
            itemCarrinho.quant = input.value;
        }
    }
        for( var i = 0; i < array.length; i++){ //deletando item do array
            if ( array[i].quant == 0) {
                array.splice(i, 1); 
                botao.parentElement.parentElement.parentElement.remove();
            }            
        }           
    checaArraySacola(array)
};

function checaArraySacola(sacola) {
    var sacolaIcon = document.getElementById('itensSacola');
    sacolaIcon.textContent = sacola.length;
    if(sacola.length > 0){
        document.querySelector('.itens-sacola').style.display = "flex";
    }
    else{document.querySelector('.itens-sacola').style.display = "none";}
}

function pegaUnProduto(id) {
    const found = produtos.find(item => item.id == id)
    if (found) {
        var unTipo = found.unTipo;
        var unVenda = found.unVenda;
        if(unVenda < 1 && unTipo == "kg") {
            unVenda = parseFloat(unVenda) * 1000
            unTipo = "g"
        }
        var infoProduto = new Object();
        infoProduto.unTipo = unTipo;
        infoProduto.unVenda = unVenda; 
        return infoProduto;
    }         
}

