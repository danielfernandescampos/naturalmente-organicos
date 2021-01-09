// popula lista de busca do nova-compra
var ul = document.getElementById("inputDiv");
produtos.forEach((item) => {
    var itemBusca = document.createElement('li');
    itemBusca.textContent = item.nome;
    itemBusca.setAttribute('data-id', item.id);
    itemBusca.classList.add("produtoLista");
    ul.appendChild(itemBusca);    
})

// idProduto int primary key auto_increment,
// 	nomeProduto varchar(32) unique not null,
// 	categProduto enum('Mercearia', 'Frutas', 'Legumes', 'Verduras e Temperos', 'Cesta Fechada') not null,
// 	fotoProduto mediumblob