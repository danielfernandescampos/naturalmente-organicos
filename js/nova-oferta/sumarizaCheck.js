function sumarizaCheck() {
    var botao = document.querySelectorAll(".sumariza-btn");
    botao.forEach(btn=>{
        btn.addEventListener('click', function(){
            console.log(arrayProdutosDuplicados)
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