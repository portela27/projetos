 function carregar() {
        var msg = document.querySelector('.msg1')
        var img = document.querySelector('.foto')
        var data = new Date()
        var hora = data.getHours()
        msg.innerHTML =  'agora sao ' +hora+'horas'
          
        if (hora >= 0 && hora <=18) {
            img.src = 'foto.png'
        }else if (hora >= 12 && <=18) {
            img.src='tarde.png'
        }else{
            img.src='noite.png'
    }
        
   


    


