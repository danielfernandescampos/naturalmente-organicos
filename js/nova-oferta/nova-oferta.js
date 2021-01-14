var tabelaCompras = document.getElementById('comprasDisponiveis');
var checkbox = tabelaCompras.querySelectorAll('.checkboxCompra');
var arrayCheck = [];

checkbox.forEach(function(item){
    item.addEventListener('click', function(){ // tenho que pegar todos que estão marcados e toda vez que clicar apagar a tabela central, checar os que estão marcados e recriar a tabela com os marcados
        produtosTr = document.querySelectorAll('.produto-tr');
        produtosTr.forEach(item=>{
            item.remove();
        }) 
        if(item.checked == true){
            var idCompra = item.parentElement.parentElement.dataset.idcompra 
            arrayCheck.push(idCompra)
            //populaTabelaCompras(idCompra)
            arrayCheck.forEach(id=>{
                populaTabelaCompras(id)
            })
        }

        if(item.checked == false) {
            var idCompra = item.parentElement.parentElement.dataset.idcompra;          
            const index = arrayCheck.indexOf(idCompra);
            if (index > -1) {
            arrayCheck.splice(index, 1);
            }
            // var idCompraProduto = document.querySelectorAll('.produto-tr');
            // idCompraProduto.forEach(item=>{
            //     if(idCompra == item.dataset.idcompra) {
            //         item.remove();
            //     }    
            // }) 
            arrayCheck.forEach(id=>{
                populaTabelaCompras(id)
            })
        }
        
        checaProdutoRepetido();
        calculaCustoOfertaTotal();
        calculaPrecoOfertaTotal();

    })
})

document.querySelector('.edit-img').addEventListener('click', function(){
    console.log(arrayCheck);
})



// tabelaCompras.addEventListener('click', function(event){
//     //console.log(event.target.parentElement)
    
// });
