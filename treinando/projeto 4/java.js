 function tabuada(){

    var n1 = parseInt(document.querySelector('#num').value)
    var resposta = document.querySelector('#res')
    var tabuadaa = ''

    for(var cont=1; cont<=10; cont++){
      tabuadaa += n1 +'x' +cont+ '=' + n1*cont
      
      res.innerHTML = tabuadaa
          
}
    

 }