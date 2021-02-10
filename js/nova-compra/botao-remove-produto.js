delIcon = document.querySelectorAll(".delete-icon");
tabela = document.getElementById("compraProdutoRow");
             
// não funciona para os novos itens adicionados 

tabela.addEventListener ('click', function(event){

    if(event.target.classList.contains('delete-icon')){
        event.target.parentElement.parentElement.remove();
        calculaCustoTotal();
    }
})
