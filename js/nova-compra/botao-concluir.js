// variáveis coluna dados compra
let fornecedorCompra = document.getElementById('selectFornecedor');
let dataCompra = document.getElementById('dataCompra');
/*let horaCompra = document.getElementById('horaCompra');*/
let statusCompra = document.getElementById('statusCompra');
let totalCompra = document.getElementById('totalCompra');
const concluirBtn = document.getElementById('concluirCompra');
var tabelaCompras = document.getElementById('compraFornecedorTable');


concluirBtn.addEventListener('click', function(){
    
    var tabelaComprasRows = tabelaCompras.querySelectorAll('tr');
    // colocando nome e data na "nova compra" da coluna de compras da esquerda
    tabelaComprasRows.forEach(item =>{
        if(item.dataset.idcompra == "nova-compra") {
            item.querySelector('td:nth-child(1)').textContent = fornecedorCompra.value;
            item.querySelector('td:nth-child(2)').textContent = dataCompra.value;
        }
    })
    
    let itensCompra = document.querySelectorAll('.produto-tr');
    let arrayItensCompra = [];
    // pegando as informações dos itens compra
    itensCompra.forEach(item=>{
        // pegando cada item da compra
        let quant = item.querySelector('.produto-quant');
        let custo = item.querySelector('.produto-custo');
        let total = item.querySelector('.produto-total');
        let idProduto = item.dataset.idproduto;
        // checa se o produto tem
        if(parseInt(total.textContent) != 0) {

            var obj = new Object();
            obj.id = idProduto;
            obj.quant  = quant.value;
            obj.custo  = custo.value;
            var jsonString = JSON.stringify(obj);
            arrayItensCompra.push(jsonString);
        } 
    })

    console.log(arrayItensCompra);

    // pegando as informações da coluna dados da compra


    // criando a tr com o nome da nova compra na coluna compras
    
    // criando o json com os dados da compra
    /*{
        idCompra: 01,
        fornecedor: "Sítio do João",
        data: "12/05/2020",
        hora: "15:20",
        status: "Não publicada",
        itemCompra: [
            {id:35, quant:25, custo:5.90},
            {id:34, quant:50, custo:2.30},
            {id:39, quant:100, custo:10},
            {id:31, quant:30, custo:7.90}
        ]
    }*/

    // adicionar ao array compras

})