var editarBotao = document.getElementById ('editarCompra');
var excluirBotao = document.getElementById ('excluirCompra');

editarBotao.addEventListener('click', habilitaEdicao)

excluirBotao.addEventListener('click', function(){
    var compraSelecionada = document.querySelector('.compra-fornecedor-selecionada');
    
    console.log('excluir compra')
    console.log(`id: ${compraSelecionada.dataset.idcompra}`)

    //if(compraSelecionada.dataset.idcompra == "nova-compra") {
        compraSelecionada.remove();

        function limpaTabela() {
            var compraProdutoTabela = document.getElementById ("compraProdutoRow");
            var rowCount = compraProdutoTabela.rows.length;
            if (rowCount > 1) {
                for (i= 1; i < rowCount; i++) {
                    compraProdutoTabela.deleteRow(1);
                }
            }
            else {
                console.log("já existe uma nova compra vazia")
                return;
            }
        }
        
        limpaTabela()
    //}

})