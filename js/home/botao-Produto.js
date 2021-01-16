var addBtn = document.querySelectorAll('.addBtn');
var delBtn = document.querySelectorAll('.delBtn');
var sacolaIcon = document.getElementById('itensSacola');

let arraySacola = [];
var numberPattern = /\d+[.]\d+/g; // pega só o número no preço

addBtn.forEach(btn=>{
    btn.addEventListener('click', function(){
        var input = btn.parentElement.querySelector('input');
        var preco = btn.parentElement.querySelector('.produto__preco');
        const idProduto = btn.parentElement.dataset.idproduto;
        input.value = parseInt(input.value) + 1; // altera input
        // procura no arraySacola se já adicionou produto
        const itemCarrinho = arraySacola.find(item => item.id === idProduto);
            if (itemCarrinho) {
                itemCarrinho.quant = input.value;
                return;
            }
            else{
                itemCompra = new Object();
                itemCompra.id = idProduto;
                itemCompra.quant = input.value;
                itemCompra.preco = (preco.textContent).match(numberPattern).join('');
                arraySacola.push(itemCompra)
            }
    })
})

delBtn.forEach(btn=>{
    btn.addEventListener('click', function(){ 
        var input = btn.parentElement.querySelector('input');
        const idProduto = btn.parentElement.dataset.idproduto;
        if (input.value > 0) {
            input.value = input.value - 1;
            const itemCarrinho = arraySacola.find(item => item.id === idProduto);
            if (itemCarrinho) {
                itemCarrinho.quant = input.value;
                return;
            }
        }
        if (input.value == 0) {
            console.log("zero")
        }
    })
})


//checaArraySacola(sacola){}