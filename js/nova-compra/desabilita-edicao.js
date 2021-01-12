function desabilitaEdicao() {

    // desabilitando a combo box de fornecedores
    fornecedor = document.getElementById('selectFornecedor');
    fornecedor.disabled = true

    // desabilitando o botão de exclusão de produto
    var produtoTr = document.querySelectorAll('.produto-tr')
    produtoTr.forEach (item=>{
        item.querySelector('.delete-icon').style.display = "none"
    })

    // desabilitando os inputs
    var produtoInputs = document.querySelectorAll('.compra-produto-input');
    produtoInputs.forEach(input=>{
        input.disabled = true
    
    // desabilitando o botão concluir
    var concluirBotao = document.getElementById ('concluirCompra');
    concluirBotao.style.display = "none" 
    })
}