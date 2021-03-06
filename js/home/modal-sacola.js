var sacolaBtn = document.querySelector(".sacolaBtn");
var modalOverlay = document.getElementById("modalOverlaySacola");
var sacolaIcon = document.querySelector('.menu__img-sacola')
var itensSacola = document.getElementById('itensSacola')

// quando clica no botão sacola
sacolaBtn.addEventListener('click', function() {
    /*document.getElementById("modalSacola").classList.add("modal-sacola")*/
    document.querySelector(".modal-sacola").style.display = "block";
    setTimeout(() => {document.querySelector(".modal-sacola").style.right = "0"; }, 0);
    setTimeout(() => {document.getElementById("modalOverlaySacola").classList.add("modal-overlay"); }, 150);  
});

sacolaIcon.addEventListener('click', function(){
    document.querySelector(".modal-sacola").style.display = "block";
    setTimeout(() => {document.querySelector(".modal-sacola").style.right = "0"; }, 0);
    setTimeout(() => {document.getElementById("modalOverlaySacola").classList.add("modal-overlay"); }, 150);   
})

itensSacola.addEventListener('click', function(){
    document.querySelector(".modal-sacola").style.display = "block";
    setTimeout(() => {document.querySelector(".modal-sacola").style.right = "0"; }, 0);
    setTimeout(() => {document.getElementById("modalOverlaySacola").classList.add("modal-overlay"); }, 150);   
})

// quando clica fora do modal 
modalOverlay.addEventListener('click', function(){
    /*document.getElementById("modalSacola").classList.remove("modal-sacola");*/
    setTimeout(() => {document.querySelector(".modal-sacola").style.display = "none";}, 100);
    document.querySelector(".modal-sacola").style.right = "-100%";
    document.getElementById("modalOverlaySacola").classList.remove("modal-overlay");
});
