function sumarizaCheck() {
    var botao = document.querySelectorAll(".sumariza-btn");
    botao.forEach(btn=>{
        btn.addEventListener('click', function(){
            var sumarizados = document.querySelectorAll('.invisivel');
            sumarizados.forEach(sumarizado=>{
                if(sumarizado.dataset.idproduto == btn.parentElement.parentElement.dataset.idproduto){
                sumarizado.classList.remove('invisivel');
                sumarizado.classList.add('produto-tr');
                btn.parentElement.parentElement.classList.remove('produto-tr');
                btn.parentElement.parentElement.classList.add('invisivel');
                sortTable()
                console.log(sumarizado)
                }
            })
            const idBtn = btn.parentElement.parentElement.dataset.idproduto;
            arrayProdutosDuplicados.forEach(duplicado=>{
                if (idBtn == duplicado.id) {
                    //btn.parentElement.parentElement.remove()
                    //criaProduto(duplicado);
                }
            })
        })
    })
}