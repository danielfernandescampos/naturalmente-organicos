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
        //event.target faz a conta só pra ele
        calculaPrecoVenda();
    }
})

tabelaOferta.addEventListener('keyup', function(event){
    if(event.target.classList.contains('compra-produto-input')){
        //event.target faz a conta só pra ele
        calculaPrecoVenda();
    }
})

// function calculaCustoTotal (){
//     var totais = tabelaProdutos.querySelectorAll('.produto-total')
//     arrayTotais = [];
//     totais.forEach(function(each){
//     arrayTotais.push(parseFloat(each.textContent, 10))  
//     })
//     totalGeral.textContent = `R$ ${(arrayTotais.reduce((a, b) => a + b, 0)).toFixed(2)}`
    
// }