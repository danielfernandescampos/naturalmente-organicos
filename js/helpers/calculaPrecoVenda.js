function calculaPrecoVenda() {

    var produtoTr = document.querySelectorAll('.produto-tr');
    produtoTr.forEach(produto=>{
        var custoDOM = produto.querySelector('.pr-custo').textContent; 
        var lucroDOM = produto.querySelector('.pr-lucro').value; 
        var precoDOM = produto.querySelector('.pr-preco'); 
        var unVendaDOM = produto.querySelector('.pr-unvenda').textContent; 
        //4 pr-quant
        //5 pr-custo
        //6 pr-lucro
        //7 pr-preco
        //8 pr-unvenda
        
        custo = parseFloat(custoDOM);
        lucro = ((parseFloat(lucroDOM)/100) + 1);
        unVenda = parseFloat(unVendaDOM);
        preco = (custo * lucro * unVenda).toFixed(2);
        precoDOM.textContent = preco;

    })
}

var tabelaOferta = document.getElementById('tabelaNovaOferta');
tabelaOferta.addEventListener('click', function(event){
    if(event.target.classList.contains('compra-produto-input')){
        //tentar fazer a conta só para o item em questão com o event.target
        calculaPrecoVenda();
        calculaCustoOfertaTotal();
        calculaPrecoOfertaTotal();
    }
})

tabelaOferta.addEventListener('keyup', function(event){
    if(event.target.classList.contains('compra-produto-input')){
        //event.target faz a conta só pra ele
        calculaPrecoVenda();
        calculaCustoOfertaTotal();
        calculaPrecoOfertaTotal();
    }
})

function calculaCustoOfertaTotal (){

    var produtoTr = document.querySelectorAll('.produto-tr');
    var custoTotal = document.getElementById('custoOferta')
    arrayTotais = []
    produtoTr.forEach(produto=>{
        var quantProduto = produto.querySelector('.pr-quant').textContent;
        var custoProduto = produto.querySelector('.pr-custo').textContent;
        var totalProduto = parseFloat(quantProduto) * parseFloat(custoProduto)
        arrayTotais.push(totalProduto);
    })

    custoTotal.textContent = `R$ ${(arrayTotais.reduce((a, b) => a + b, 0)).toFixed(2)}`   
}

function calculaPrecoOfertaTotal(){
    
    var produtoTr = document.querySelectorAll('.produto-tr');
    var precoTotal = document.getElementById('precoOferta');
    arrayTotais = []
    produtoTr.forEach(produto=>{
        var quantProduto = produto.querySelector('.pr-quant').textContent; // 4 pr-quant
        var custoProduto = produto.querySelector('.pr-custo').textContent;
        var lucroProduto = produto.querySelector('.pr-lucro').value;
        var totalProduto = parseFloat(quantProduto) * parseFloat(custoProduto) * (parseFloat(lucroProduto)/100 + 1)
        arrayTotais.push(totalProduto);
    })
    precoTotal.textContent = `R$ ${(arrayTotais.reduce((a, b) => a + b, 0)).toFixed(2)}`
}

calculaCustoOfertaTotal();
calculaPrecoOfertaTotal();