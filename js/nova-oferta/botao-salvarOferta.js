const salvarOferta = document.getElementById('salvarOferta');

salvarOferta.addEventListener('click', function(){
    // pega as compras que compõem a oferta
    var tabelaCompras = document.getElementById('comprasDisponiveis');
    var checkbox = tabelaCompras.querySelectorAll('.checkboxCompra')
    let arrayIdCompras = []
    checkbox.forEach(function(item){
        if(item.checked == true){
            var idCompra = item.parentElement.parentElement.dataset.idcompra 
            arrayIdCompras.push(idCompra);
        }
    })

    //pega itens oferta
    let itensOferta = document.querySelectorAll('.produto-tr');
    let arrayItemOferta = [];
    // pegando as informações dos itens compra
    itensOferta.forEach(item=>{
        // pegando cada item da compra
        var lucroProduto = item.querySelector('td:nth-child(6) input').value;
        let idProduto = item.dataset.idproduto;

        // criando o json com os dados do produto
        var itemOferta = new Object();
        itemOferta.id = idProduto;
        itemOferta.lucro  = lucroProduto;
        var jsonString = JSON.stringify(itemOferta);
        arrayItemOferta.push(jsonString);
        
    })  
    // pegando data e hora da oferta
    dataOferta = document.getElementById('dataCompra').value;
    horaOferta = document.getElementById('horaCompra').value;
    
    // criando o json com os dados da Oferta
    var oferta = new Object();
    oferta.idCompra = arrayIdCompras; // 
    oferta.data = dataOferta;
    oferta.hora = horaOferta;
    oferta.itensOferta = arrayItemOferta;
    console.log(oferta);
})
    