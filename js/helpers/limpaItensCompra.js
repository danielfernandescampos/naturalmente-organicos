// limpa a tabela
function limpaTabela() {
    compraProdutoTabela = document.getElementById('compraProdutoRow')
    var rowCount = compraProdutoTabela.rows.length;
    if (rowCount > 1) {
        for (i= 1; i < rowCount; i++) {
            compraProdutoTabela.deleteRow(1);
        }
    }
    else {
        return;
    }
}

// limpa negrito da compra selecionada
function limpaNegrito () {
    var comprasRow = document.querySelectorAll('.compra-tr');
    comprasRow.forEach (item => {
        item.classList.remove("compra-fornecedor-selecionada")
    })
}