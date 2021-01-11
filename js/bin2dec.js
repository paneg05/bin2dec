
var verificacao
var entrada
var x=0
var numero=''
 function recupera (){
     
     
     

    entrada=document.getElementById('entrada').value
    

    x=entrada.length -1
    

    


    if(entrada.charAt(x)!='1' && entrada.charAt(x)!='0'){
        console.log('entre apenas com 0 e 1')
        var n = entrada.replace(entrada.charAt(x),'')
        document.getElementById('entrada').value=n
        
    }else if(x==8){
        var n = entrada.replace(entrada.charAt(x),'')
        document.getElementById('entrada').value=n
        console.log('maximo de 8 números !!!')
    }
    
    

    
       


   


}
















