var addBtn = document.querySelectorAll('.addBtn');
var delBtn = document.querySelectorAll('.delBtn');
var sacola = document.getElementById('itensSacola')

addBtn.forEach(btn=>{
    btn.addEventListener('click', function(){
        var input = btn.parentElement.querySelector('input');
            input.value = parseInt(input.value) + 1;
            sacola.textContent = parseInt(sacola.textContent) + 1;
            sacola.style.display = "block"


    })
})

delBtn.forEach(btn=>{
    btn.addEventListener('click', function(){ 
        var input = btn.parentElement.querySelector('input');
        if (input.value > 0) {
            input.value = input.value - 1;
        }
        if (input.value == 0) {

        }
    })
})

criaItensSacola(produto)