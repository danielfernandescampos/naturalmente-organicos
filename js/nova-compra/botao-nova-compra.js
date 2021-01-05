var compraProdutoTabela = document.getElementById ("compraProdutoRow");
var botaoNovaCompra = document.querySelector (".nova-compra-botao");
var rowCount = compraProdutoTabela.rows.length;

//quando botao clicado
botaoNovaCompra.addEventListener("click", function(){
    for (i= 1; i < rowCount; i++) {
        compraProdutoTabela.deleteRow(1);
    }
});
