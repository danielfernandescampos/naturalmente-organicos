var finalizaBtn = document.querySelector('.finalizar-pedido-botao')
finalizaBtn.addEventListener('click', function(){
    document.getElementById("modalLogin").classList.add("modal-login")
    document.getElementById("modalOverlayLogin").classList.add("modal-overlay");  
    email.focus(); 
})