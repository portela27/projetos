 function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if(fano.value.length == 0 || fano.value > ano){
      window.alert('Erro')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homen'
            if(idade>=0 && idade < 10){
                //bebe
                img.setAttribute('src','bebe-menino.jpg')
            }
            else if(idade < 20){
                //criança
                img.setAttribute('src','ciança-menino.jpg')

            }
            else if(idade < 21){
                //adulto
                img.setAttribute('src','homen-aduto.jpg')

            }
            else {
                // velho
                img.setAttribute('src','idoso.jpg')

            }
        } else if (fsex[1].checked){
            genero='mulher'
            if(idade>=0 && idade < 10){
                //bebe
                img.setAttribute('src','bebe-mulher.jpg')
            }
            else if(idade < 20){
                //criança
                img.setAttribute('src','criança-menina.jpg')
            }
            else if(idade < 21){
                //adulta
                img.setAttribute('src','mulher-adulto.jpg')
            }
            else {
                // velha
                img.setAttribute('src','idoso-mulher.jpg')
            }
            
        }
        
        res.innerHTML ="o genero é "+genero+ " e a idade é "+idade
        res.appendChild(img)
    }
    
}