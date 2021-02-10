inputBusca = document.getElementById('buscaFixa');

inputBusca.addEventListener('keyup', function(){
    listaProdutos = document.querySelectorAll('.produto-tr')
    listaProdutos.forEach(produto=>{
        produtoNome = produto.querySelector('td:nth-child(2)').textContent
        var expressao = new RegExp(this.value, 'i'); //o que ela busca, case "i"nsensitive
        if(expressao.test(produtoNome)){
            produto.style.display = "table-row";
        } else {
            produto.style.display = "none";
        }
    })
})