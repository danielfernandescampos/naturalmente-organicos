var addBtn = document.querySelectorAll('.addBtn');
var delBtn = document.querySelectorAll('.delBtn');

let arraySacola = [];
var numberPattern = /\d+[.]\d+/g; // pega só o número no preço

addBtn.forEach(btn=>{
    btn.addEventListener('click', function(){
        botaoMais(arraySacola, btn)
    })
})

delBtn.forEach(btn=>{
    btn.addEventListener('click', function(){
        botaoMenos(arraySacola, btn)
    })
})

function botaoMais(array, botao){
    var input = botao.parentElement.querySelector('input');
    var preco = botao.parentElement.querySelector('.produto__preco');
    const idProduto = botao.parentElement.dataset.idproduto;
    input.value = parseInt(input.value) + 1; // altera input
    // procura no arraySacola se já adicionou produto
    const itemCarrinho = array.find(item => item.id === idProduto);
        if (itemCarrinho) {
            itemCarrinho.quant = input.value;
        }
        else{
            itemCompra = new Object();
            itemCompra.id = idProduto;
            itemCompra.quant = input.value;
            itemCompra.preco = (preco.textContent).match(numberPattern).join('');
            array.push(itemCompra)
        }
    checaArraySacola(array)
};

function botaoMenos(array, botao){
    var input = botao.parentElement.querySelector('input');
    const idProduto = botao.parentElement.dataset.idproduto;
    if (input.value > 0) {
        input.value = input.value - 1;
        var itemCarrinho = array.find(item => item.id === idProduto);
        if (itemCarrinho) {
            itemCarrinho.quant = input.value;
        }
    }
        for( var i = 0; i < array.length; i++){ //deletando item do array
            if ( array[i].quant == 0) {
                array.splice(i, 1); 
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

