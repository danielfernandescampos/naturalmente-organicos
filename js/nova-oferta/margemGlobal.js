margemGlobal = document.querySelector('.dados-compra tr:nth-child(4) td:nth-child(2) input')
margemGlobal.addEventListener('keyup', function(){
    
    var produtoTr = document.querySelectorAll('.produto-tr');
    produtoTr.forEach(produto=>{
        var lucro = produto.querySelector('.pr-lucro');
        lucro.value = margemGlobal.value
    })
    calculaPrecoVenda();
    calculaCustoOfertaTotal();
    calculaPrecoOfertaTotal();
})
