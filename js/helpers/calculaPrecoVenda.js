function calculaPrecoVenda() {

    var produtoTr = document.querySelectorAll('.produto-tr');
    produtoTr.forEach(produto=>{

        var custoDOM = produto.querySelector('td:nth-child(5)').textContent;
        var lucroDOM = produto.querySelector('td:nth-child(6) input').value;
        var precoDOM = produto.querySelector('td:nth-child(7)');
        
        custo = parseFloat(custoDOM);
        lucro = ((parseFloat(lucroDOM)/100) + 1);
        preco = (custo * lucro).toFixed(2);
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
        var quantProduto = produto.querySelector('td:nth-child(4)').textContent;
        var custoProduto = produto.querySelector('td:nth-child(5)').textContent;
        var totalProduto = parseFloat(quantProduto) * parseFloat(custoProduto)
        arrayTotais.push(totalProduto);
    })

    custoTotal.textContent = `R$ ${(arrayTotais.reduce((a, b) => a + b, 0)).toFixed(2)}`   
}

function calculaPrecoOfertaTotal(){
    
    var produtoTr = document.querySelectorAll('.produto-tr');
    var precoTotal = document.getElementById('precoOferta')
    arrayTotais = []
    produtoTr.forEach(produto=>{
        var quantProduto = produto.querySelector('td:nth-child(4)').textContent;
        var custoProduto = produto.querySelector('td:nth-child(5)').textContent;
        var lucroProduto = produto.querySelector('td:nth-child(6) input').value;
        var totalProduto = parseFloat(quantProduto) * parseFloat(custoProduto) * (parseFloat(lucroProduto)/100 + 1)
        arrayTotais.push(totalProduto);
    })

    precoTotal.textContent = `R$ ${(arrayTotais.reduce((a, b) => a + b, 0)).toFixed(2)}`
}

calculaCustoOfertaTotal();
calculaPrecoOfertaTotal();