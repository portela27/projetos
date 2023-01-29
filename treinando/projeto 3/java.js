 function contar(){
     var inicio = document.querySelector('#inicio')
     var fim = document.querySelector('#fim')
     var Passo = document.querySelector('#Passo')
    var res = document.querySelector('#res') 

     if(inicio.value.length == 0 || fim.value.length == 0|| Passo.value.length == 0 ){
        window.alert('erro')
     } else {
        res.innerHTML='contando;'
         let i = Number(inicio.value)
         let f = Number(fim.value)
         let p = Number(Passo.value)
         if(p == 0){
            p=1
            window.alert('passo invalido , considerando 1')
         }
        
         for( let c = i ; c <= f; c += p){
            res.innerHTML += c + '\u{1F449}'
         }

     }
     

      
}
 
    
