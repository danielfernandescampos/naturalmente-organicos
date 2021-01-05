// variáveis

var input = document.getElementById("addProduto");
var filter = input.value.toUpperCase();
var ul = document.getElementById("inputDiv");
var li = document.querySelectorAll(".produtoLista");
var a, i, txtValue;

console.log (li[1]);


/*this.li.addEventListener("click", function() {
    console.log(this.li);
})*/

// abrindo a busca do input

input.addEventListener('keyup', function(){
    ul.style.display = "block";
    /*for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }*/

    checarInput();
})

// checando se o input está vazio para fechar a busca

function checarInput() {
    if (input.value.length == 0) {
        ul.style.display = "none";
    } 
}

// teste com o botão concluir
document.getElementById('concluirCompra').addEventListener("click", function(){
    console.log (input.value);
}) 
