// variáveis coluna dados compra
let fornecedorCompra = document.getElementById('selectFornecedor');
let dataCompra = document.getElementById('dataCompra');
/*let horaCompra = document.getElementById('horaCompra');*/
let statusCompra = document.getElementById('statusCompra');
let totalCompra = document.getElementById('totalCompra');
const concluirBtn = document.getElementById('concluirCompra');
var tabelaCompras = document.getElementById('compraFornecedorTable');


concluirBtn.addEventListener('click', function(){

    desabilitaEdicao()
    
    var compraSelecionada = document.querySelector('.compra-fornecedor-selecionada')
    
    var tabelaComprasRows = tabelaCompras.querySelectorAll('tr');
    // colocando nome e data na "nova compra" da coluna de compras da esquerda
    tabelaComprasRows.forEach(item =>{
        if(item.dataset.idcompra == "nova-compra") {
            item.querySelector('td:nth-child(1)').textContent = fornecedorCompra.value;
            item.querySelector('td:nth-child(2)').textContent = dataCompra.value;
        }
    })
    
    let itensCompraTr = document.querySelectorAll('.produto-tr');
    let arrayItemCompra = [];
    // pegando as informações dos itens compra
    itensCompraTr.forEach(item=>{
        // pegando cada item da compra
        let quant = item.querySelector('.produto-quant');
        let custo = item.querySelector('.produto-custo');
        let total = item.querySelector('.produto-total');
        let idProduto = item.dataset.idproduto;

        // checa se o produto tem quantidade
        if(parseInt(total.textContent) != 0) {
            // criando o json com os dados do produto
            var itemCompra = new Object();
            itemCompra.id = idProduto;
            itemCompra.quant  = quant.value;
            itemCompra.custo  = custo.value;
            var jsonString = JSON.stringify(itemCompra);
            arrayItemCompra.push(jsonString);
        } 
    })   
    // criando o json com os dados da compra
    var compra = new Object();
    compra.idCompra = compraSelecionada.dataset.idcompra;
    compra.fornecedor = fornecedorCompra.value;
    compra.data = dataCompra.value;
    compra.itensCompra = arrayItemCompra;
    console.log(compra);
})