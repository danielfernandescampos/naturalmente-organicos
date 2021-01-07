//variáveis
var produtoRow = document.querySelectorAll('.produto-tr');
var tabelaProdutos = document.getElementById('compraProdutoRow')
var input = tabelaProdutos.querySelectorAll('.compra-produto-input');


// calcula o total de cada produto da tabelaProdutos
function calculaCustoParcial () { 
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
input.forEach (function(each) {    
    each.addEventListener('keyup',calculaCustoParcial)
})
input.forEach (function(each) {    
    each.addEventListener('click',calculaCustoParcial)
})
input.forEach (function(each) {    
    each.addEventListener('keyup', calculaCustoTotal)
})
input.forEach (function(each) {    
    each.addEventListener('click',calculaCustoTotal)
})

// calculando o total geral
var totais = tabelaProdutos.querySelectorAll('.produto-total')
var tabelaDados = document.querySelector('.dados-compra');
var totalGeral = tabelaDados.querySelector('.total');

function calculaCustoTotal (){
    arrayTotais = [];
    totais.forEach(function(each){
    arrayTotais.push(parseInt(each.textContent, 10))  
    })
    totalGeral.textContent = `R$ ${arrayTotais.reduce((a, b) => a + b, 0)}`
}


calculaCustoParcial();
calculaCustoTotal();
