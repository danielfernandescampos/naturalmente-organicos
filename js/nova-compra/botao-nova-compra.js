// variáveis do DOM
var compraProdutoTabela = document.getElementById ("compraProdutoRow");
var botaoNovaCompra = document.querySelector (".nova-compra-botao");
var dataCompraDados = document.getElementById('dataCompra');
var horaCompra = document.getElementById('horaCompra');

/*compraTr.forEach(item=>{
    console.log(item.dataset.idcompra)
})*/
// pegando a data e hora de hoje
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
h = today.getHours();
m = today.getMinutes();
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  m = checkTime(m);
diaAtual = dd + '/' + mm + '/' + yyyy;
horaAtual = h + ":" + m;

//quando botao clicado
botaoNovaCompra.addEventListener("click", novaCompra)


function novaCompra() {
    var tabelaCompras = document.getElementById('compraFornecedorTable');

    
    if(checaNovaCompra()==true) {
        console.log('já tem uma compra em aberto')}
        
        else {
            
        var rowCount = compraProdutoTabela.rows.length;
        if (rowCount > 1) {
            // limpando a tabela central
            limpaTabela();
        }
            //recontando o rowCount para entrar no else na próxima vez
            rowCount = compraProdutoTabela.rows.length;

            // criando os elementos na coluna esquerda
            var novaCompra = document.createElement('tr');
            var nomeCompra = document.createElement('td')
            var dataCompra = document.createElement('td')

            // colocando os dados nos elementos
            nomeCompra.innerHTML = "Nova Compra";
            dataCompra.innerHTML = diaAtual;
            dataCompraDados.value = diaAtual;
            horaCompra.value = horaAtual;
            novaCompra.setAttribute('data-idcompra', 'nova-compra');

            novaCompra.appendChild(nomeCompra);
            novaCompra.appendChild(dataCompra);
            tabelaCompras.appendChild(novaCompra);
            limpaNegrito();
            limpaInput();
            novaCompra.classList.add("compra-fornecedor-selecionada");
            novaCompra.classList.add('compra-tr');
        
    }
    
    habilitaEdicao()
};

// limpa a tabela
function limpaTabela() {
    var rowCount = compraProdutoTabela.rows.length;
    if (rowCount > 1) {
        for (i= 1; i < rowCount; i++) {
            compraProdutoTabela.deleteRow(1);
        }
    }
    else {
        console.log("já existe uma nova compra vazia")
        return;
    }
}


// limpa negrito da compra selecionada
function limpaNegrito () {
    var comprasRow = document.querySelectorAll('.compra-tr');
    comprasRow.forEach (item => {
        item.classList.remove("compra-fornecedor-selecionada")
    })
}

// limpa input
function limpaInput() {
    var input = document.getElementById("addProduto");
    input.value = "";
    input.focus();    
}

// checa se já existe uma "nova-compra"
function checaNovaCompra() {

    var temNovaCompra = false;
    var compraTr = document.querySelectorAll('.compra-tr');
    compraTr.forEach(item=>{
        /*console.log(item.getAttribute('data-idcompra'))*/
        if(item.getAttribute('data-idcompra') == "nova-compra"){
            temNovaCompra = true;
        }
    })
    return temNovaCompra;
}