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
                sumarizado.querySelector('.sumariza-check-off').classList.add("sumariza-check-on");
                sortTable();
                }
            })
            const idBtn = btn.parentElement.parentElement.dataset.idproduto;
            arrayProdutosDuplicados.forEach(duplicado=>{
                if (idBtn == duplicado.id) {
                    //btn.parentElement.parentElement.remove()
                    //criaProduto(duplicado);
                }
            })
            sumarizaCheck2 ()
        })
    })

}

function sumarizaCheck2 () {
    var sumarizado = document.querySelectorAll('.produto-sumarizado')
    var checados = document.querySelectorAll('.sumariza-check-on');
    checados.forEach(checado=>{
        //console.log(checado.parentElement.parentElement);
        //console.log(checado)
        checado.addEventListener('click', function(){
            if(checado.checked == true){
                console.log('oi')
                //joga num array
                //se array.length > 2
                //apaga itens checados, acendo .produto-sumarizado e faz a fórmula
            }
        })
    })
    sumarizado.forEach(item=>{
        //console.log(item)
    })

}