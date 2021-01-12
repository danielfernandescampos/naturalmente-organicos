// pegando a data e hora de hoje
function pegaDiaHoraAtual(escolhe) { // se passar "dia" retorna o dia e se passar "hora" retorna a hora
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
    if(escolhe == "dia") {
        return diaAtual
    }  
    if(escolhe == "hora"){
        return horaAtual
    }
}