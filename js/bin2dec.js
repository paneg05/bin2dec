var bin
var i




function converte(){
    
    bin=document.getElementById('entrada').value
    i=bin.length -1
    
    if(i==-1){
       return  document.getElementById('saida').value=''
    }else  if(bin.charAt(i)!='1'&&bin.charAt(i)!='0'&&bin.charAt(i)!=''){

        document.getElementById('entrada').value=bin.replace(bin.charAt(i),'')

        console.log(bin.charAt(i))
        var k=bin.charAt(i)
        
        return alert('insira apenas números binarios!!!')
    }else{
        const decimal = parseInt(bin, 2)// aki que mora a malandragem, o segundo parametro informa a base da string
        document.getElementById('saida').value=decimal
    }
    

   
}


function preciona() {
    if(i==7){
        alert('permitido apenas 8 números !!')
        return document.getElementById('entrada').value=bin.replace(bin.charAt(i),'')
    }
}











    

    
       


   


















