var editarBotao = document.getElementById ('editarCompra');
var excluirBotao = document.getElementById ('excluirCompra');
var concluirBotao = document.getElementById ('concluirCompra');
var produtoInputs = document.querySelectorAll('.compra-produto-input')

editarBotao.addEventListener('click', function(){
    
    concluirBotao.style.display = "inline" // desabilita o botão concluir
    produtoInputs.forEach(input=>{ // habilita os inputs 
        input.disabled = false
    })
})

excluirBotao.addEventListener('click', function(){

    console.log('oi')
    produtoInputs.forEach(input=>{
        input.disabled = true
    })
})
