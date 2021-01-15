// variáveis do DOM
var botaoNovaCompra = document.querySelector (".nova-compra-botao");
var dataCompraDados = document.getElementById('dataCompra');
var horaCompra = document.getElementById('horaCompra');

//quando botao clicado
botaoNovaCompra.addEventListener("click", novaCompra)

function novaCompra() {
    var compraProdutoTabela = document.getElementById ("compraProdutoRow");
    var tabelaCompras = document.getElementById('compraFornecedorTable');
    
    if(checaNovaCompra()==true) { // checa se já tem uma nova compra em aberto
        console.log('já tem uma compra em aberto')}
        
        else {
            var rowCount = compraProdutoTabela.rows.length;
            if (rowCount > 1) {
                // limpando a tabela central
                limpaTabela();                
                habilitaEdicao();
                calculaCustoTotal();
            }
            //recontando o rowCount para entrar no else na próxima vez
            rowCount = compraProdutoTabela.rows.length;

            // criando os elementos na coluna esquerda
            var novaCompra = document.createElement('tr');
            var nomeCompra = document.createElement('td')
            var dataCompra = document.createElement('td')

            // colocando os dados nos elementos
            nomeCompra.innerHTML = "Nova Compra";
            dataCompra.innerHTML = pegaDiaHoraAtual('dia');
            dataCompraDados.value = pegaDiaHoraAtual('dia');
            horaCompra.value = pegaDiaHoraAtual('hora');
            novaCompra.setAttribute('data-idcompra', 'nova-compra');

            // append childs
            novaCompra.appendChild(nomeCompra);
            novaCompra.appendChild(dataCompra);
            tabelaCompras.appendChild(novaCompra);
            limpaNegrito();
            limpaInput();
            novaCompra.classList.add("compra-fornecedor-selecionada");
            novaCompra.classList.add('compra-tr');        
    }
    
};

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