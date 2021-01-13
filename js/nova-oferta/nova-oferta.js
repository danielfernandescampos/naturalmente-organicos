var tabelaCompras = document.getElementById('comprasDisponiveis');
var checkbox = tabelaCompras.querySelectorAll('.checkboxCompra')

checkbox.forEach(function(item){
    item.addEventListener('click', function(){
        if(item.checked == true){
            var idCompra = item.parentElement.parentElement.dataset.idcompra 
            populaTabelaCompras(idCompra)
        }

        if(item.checked == false) {
            var idCompra = item.parentElement.parentElement.dataset.idcompra;          
            var idCompraProduto = document.querySelectorAll('.produto-tr');
            idCompraProduto.forEach(item=>{
                if(idCompra == item.dataset.idcompra) {
                    item.remove();
                }    
            }) 
        }
        
    calculaCustoOfertaTotal();
    calculaPrecoOfertaTotal();
    })
})


tabelaCompras.addEventListener('click', function(event){
    //console.log(event.target.parentElement)
    
});
