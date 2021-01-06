delIcon = document.querySelectorAll(".delete-icon");
tabela = document.getElementById("compraProdutoRow");
       
//assim deleta no click da última célula e não do botão        
// não funciona para os novos itens adicionados 

        for(i=1; i < tabela.rows.length; i++) {
        
                tabela.rows[i].cells[6].onclick = function(){
                    
                    rIndex = this.parentElement.rowIndex;
                    tabela.deleteRow(rIndex);
                }            
            }
      


// delIcon.forEach(item => {
//     item.addEventListener('click', function(){       
        
//         for(i=0; i < tabela.rows.length; i++) {
            
//             for(j=0; j < tabela.rows[i].cells.length; j++) {
        
//                 tabela.rows[i].cells[j].onclick = function(){
                    
//                     rIndex = this.parentElement.rowIndex;
//                     tabela.deleteRow(rIndex);
//                 }            
//             }
//         }
        
//     })
// } )
