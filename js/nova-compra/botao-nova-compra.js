// variáveis do DOM
var compraProdutoTabela = document.getElementById ("compraProdutoRow");
var botaoNovaCompra = document.querySelector (".nova-compra-botao");
var tabelaCompras = document.getElementById('compraFornecedorTable');
// pegando a data de hoje
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

//quando botao clicado
botaoNovaCompra.addEventListener("click", function(){
    // limpando a tabela central
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
    //recontando o rowCount para entrar no else na próxima vez
    rowCount = compraProdutoTabela.rows.length;

    console.log(today);
    // criando os elementos na coluna esquerda
    var novaCompra = document.createElement('tr');
    var nomeCompra = document.createElement('td')
    var dataCompra = document.createElement('td')

    // colocando os dados nos elementos
    nomeCompra.innerHTML = "Nova Compra";
    dataCompra.innerHTML = today;

    novaCompra.appendChild(nomeCompra);
    novaCompra.appendChild(dataCompra);
    tabelaCompras.appendChild(novaCompra);
    limpaNegrito();
    novaCompra.classList.add("compra-fornecedor-selecionada");
    novaCompra.classList.add('compra-tr');
});

// limpa negrito da compra selecionada
function limpaNegrito () {
    var comprasRow = document.querySelectorAll('.compra-tr');
    comprasRow.forEach (item => {
        item.classList.remove("compra-fornecedor-selecionada")
    })
}