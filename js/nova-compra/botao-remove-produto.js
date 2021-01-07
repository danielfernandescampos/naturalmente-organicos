delIcon = document.querySelectorAll(".delete-icon");
tabela = document.getElementById("compraProdutoRow");
             
// não funciona para os novos itens adicionados 

tabela.addEventListener ('click', function(event){

    if(event.target.classList.contains('delete-icon')){
        event.target.parentElement.parentElement.remove();
    }
})

// delIcon.forEach (function(icon){
//     icon.addEventListener('click', function(){
//         this.parentElement.parentElement.remove();
//         //tabela.deleteRow(icon.parentElement.parentElement.rowIndex);

//     })

// });

        // for(i=1; i < tabela.rows.length; i++) {

        //         tabela.rows[i].cells[6].onclick = function(){
                    
        //             rIndex = this.parentElement.rowIndex;
        //             tabela.deleteRow(rIndex);
        //         }            
        //     }
      


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
