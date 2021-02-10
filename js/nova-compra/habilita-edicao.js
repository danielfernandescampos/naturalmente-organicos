function habilitaEdicao() {

    // habilitando a adição de novos produtos
    inputProduto = document.querySelector('.add-produto');
    inputProduto.style.display = "block"

    // habilitando a combo box de fornecedores
    var fornecedor = document.getElementById('selectFornecedor');
    fornecedor.disabled = false

    // habilitando o botão de exclusão de produto
    var produtoTr = document.querySelectorAll('.produto-tr')
    produtoTr.forEach (item=>{
        item.querySelector('.delete-icon').style.display = "inline"
    })

    //habilitando o botão concluir
    var concluirBotao = document.getElementById ('concluirCompra');
    concluirBotao.style.display = "inline"

    // habilitando os inputs
    var produtoInputs = document.querySelectorAll('.compra-produto-input');
    produtoInputs.forEach(input=>{ 
        input.disabled = false
    })

}