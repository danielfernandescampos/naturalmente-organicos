var tabelaCompras = document.getElementById('comprasDisponiveis');
compras.forEach((item) =>{
    // criar as tr e td
    var compraTr = document.createElement('tr');
    var compraTitulo = document.createElement('td');
    var compraTituloInput = document.createElement('input');
    var compraTituloNome = document.createElement('label');
    var compraData = document.createElement('td');
    var compraEdit = document.createElement('td');
    var compraEditImg = document.createElement('img');
    // setar os atributos com compra.fornecedor compra.data e data-idCompra 
    compraTr.setAttribute('data-idCompra', item.idCompra);
    compraTr.classList.add('compra-tr');
    compraTituloInput.type = "checkbox"
    compraTituloInput.classList.add('checkboxCompra')
    compraTituloNome.textContent = item.fornecedor;
    compraData.textContent = item.data;
    compraEditImg.src = "../img/edit-icon.png";
    compraEditImg.classList.add('edit-img-esq');
    // append childs
    compraTitulo.appendChild(compraTituloInput);
    compraTitulo.appendChild(compraTituloNome);
    compraEdit.appendChild(compraEditImg);
    compraTr.appendChild(compraTitulo);
    compraTr.appendChild(compraData);
    compraTr.appendChild(compraEdit);
    tabelaCompras.appendChild(compraTr);

})