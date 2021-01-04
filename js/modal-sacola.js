var sacolaBtn = document.querySelector(".sacolaBtn");
var modalOverlay = document.getElementById("modalOverlaySacola");

// quando clica no botão sacola
sacolaBtn.addEventListener('click', function() {
    /*document.getElementById("modalSacola").classList.add("modal-sacola")*/
    document.querySelector(".modal-sacola").style.right = "0";
    setTimeout(() => {document.getElementById("modalOverlaySacola").classList.add("modal-overlay"); }, 150);   
});

// quando clica fora do modal 
modalOverlay.addEventListener('click', function(){
    /*document.getElementById("modalSacola").classList.remove("modal-sacola");*/
    document.querySelector(".modal-sacola").style.right = "-100%";
    document.getElementById("modalOverlaySacola").classList.remove("modal-overlay");
});
