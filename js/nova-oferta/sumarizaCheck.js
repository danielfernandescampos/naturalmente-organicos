function sumarizaBtn() {
    var botao = document.querySelectorAll(".sumariza-btn");
    var arrayChecados = [];
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
            sumarizaCheck (arrayChecados)
        })
    })

}

function sumarizaCheck (arrayChecados) {
    var sumarizados = document.querySelectorAll('.produto-sumarizado')
    var checados = document.querySelectorAll('.sumariza-check-on');
    checados.forEach(checado=>{
            checado.addEventListener('click', function(){
                //var checados2 = document.querySelectorAll('.sumariza-check-on');
                //checados2.forEach(checado2 => {
                    if(checado.checked == true){
                        objChecado = new Object();
                        objChecado.id = checado.parentElement.parentElement.dataset.idproduto;
                        objChecado.quant = checado.parentElement.parentElement.querySelector('.pr-quant').textContent;
                        objChecado.custo = checado.parentElement.parentElement.querySelector('.pr-custo').textContent;
                        console.log('objeto checado: ', objChecado)
                        arrayChecados.push(objChecado);
                    }
                    const produtosSumarizados = arrayChecados.reduce((acc, curr) => {
                        const duplicatedProduct = acc.find(item => item.id === curr.id); // procura no acc o produto repetido
                        if (duplicatedProduct) { // se tiver produto duplicado
                        const newQuant = parseFloat(duplicatedProduct.quant) + parseFloat(curr.quant); // soma as quantidades
                        const newCusto = (parseFloat(duplicatedProduct.custo)*parseFloat(duplicatedProduct.quant) + parseFloat(curr.custo)*parseFloat(curr.quant))/newQuant; // soma os custos
                        acc.forEach(item => { // altera o produto existente na lista final para ter a quantidade e o custo final 
                            if (item.id === duplicatedProduct.id) {
                            item.quant = newQuant;
                            item.custo = newCusto.toFixed(2);
                            }
                        });
                        return acc;
                        }  
                        // se não tiver produto duplicado
                        acc.push(curr);
                        return acc;
                    }, []);
                    //console.log('reduce produtosSumarizados: ', produtosSumarizados)
                    //console.log('reduce arrayChecados: ', arrayChecados)
      
                console.log('array Checados: ', arrayChecados);        
                //console.log('array Checados2: ', arrayChecados2);      
        })
       
    })


}

