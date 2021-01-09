var tabelaCompras = document.getElementById('compraFornecedorTable');
compras.forEach((item) =>{
    // criar as tr e td
    var compraTr = document.createElement('tr');
    var compraTitulo = document.createElement('td');
    var compraData = document.createElement('td');
    // setar os atributos com compra.fornecedor compra.data e data-idCompra 
    compraTr.setAttribute('data-idCompra', item.idCompra);
    compraTr.classList.add('compra-tr');
    compraTitulo.textContent = item.fornecedor;
    compraData.textContent = item.data;
    // append childs
    compraTr.appendChild(compraTitulo);
    compraTr.appendChild(compraData);
    tabelaCompras.appendChild(compraTr);
    //colocar as classes

})