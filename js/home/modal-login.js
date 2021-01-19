var entrarBtn = document.querySelector(".entrarBtn");
var modalOverlay = document.getElementById("modalOverlayLogin");
var email = document.querySelector("#inputEmail");
var senha = document.querySelector("#inputSenha"); 
var entrarLoginBtn = document.querySelector("#entrarLoginBtn"); 
var loginIcon = document.querySelector('.menu__img-login')

// quando clica no botão login
entrarBtn.addEventListener('click', function() {
    document.getElementById("modalLogin").classList.add("modal-login")
    document.getElementById("modalOverlayLogin").classList.add("modal-overlay");  
    email.focus();  
});

loginIcon.addEventListener('click', function() {
    document.getElementById("modalLogin").classList.add("modal-login")
    document.getElementById("modalOverlayLogin").classList.add("modal-overlay");  
    email.focus();  
});

// quando clica fora do modal login
modalOverlay.addEventListener('click', fechaModal)

// fechar o modal
function fechaModal() {
    document.getElementById("modalLogin").classList.remove("modal-login");
    document.getElementById("modalOverlayLogin").classList.remove("modal-overlay");
}

// quando login é administrador
entrarLoginBtn.addEventListener('click', function() {
    if(email.value == "administrador") {
        document.querySelector(".header").style.margin = "2.5rem 0 0 0";
        document.querySelector("#menuAdmin").classList.add("menu-admin");
    }
    fechaModal();
});