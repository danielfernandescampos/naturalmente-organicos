//variáveis
var tabelaProdutos = document.getElementById('compraProdutoRow')
var input = tabelaProdutos.querySelectorAll('.compra-produto-input');


// calcula o total de cada produto da tabelaProdutos
function calculaCustoParcial () { 
    var produtoRow = document.querySelectorAll('.produto-tr');
    produtoRow.forEach(function(each){
        var quant = each.querySelector(".produto-quant");
        var custo = each.querySelector('.produto-custo');
        var total = each.querySelector('.produto-total');
        var custoTotal = quant.value * custo.value;
        total.textContent = `${custoTotal}`;
    })
}

// calcula o total do produto quando preenche o input
// toda hora que muda um produto, recalcula a tabelaProdutos toda => rever
tabelaProdutos.addEventListener ('click', function(event){
    if(event.target.classList.contains('compra-produto-input')){
        calculaCustoParcial();
        calculaCustoTotal();
    }
})

tabelaProdutos.addEventListener ('keyup', function(event){
    if(event.target.classList.contains('compra-produto-input')){
        calculaCustoParcial();
        calculaCustoTotal();
    }
})
// input.forEach (function(each) {    
//     each.addEventListener('keyup',calculaCustoParcial)
// })
// input.forEach (function(each) {    
//     each.addEventListener('click',calculaCustoParcial)
// })
// input.forEach (function(each) {    
//     each.addEventListener('keyup', calculaCustoTotal)
// })
// input.forEach (function(each) {    
//     each.addEventListener('click',calculaCustoTotal)
// })

// calculando o total geral
var tabelaDados = document.querySelector('.dados-compra');
var totalGeral = tabelaDados.querySelector('.total');

function calculaCustoTotal (){
    var totais = tabelaProdutos.querySelectorAll('.produto-total')
    arrayTotais = [];
    totais.forEach(function(each){
    arrayTotais.push(parseInt(each.textContent, 10))  
    })
    totalGeral.textContent = `R$ ${arrayTotais.reduce((a, b) => a + b, 0)}`
}


calculaCustoParcial();
calculaCustoTotal();