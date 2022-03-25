function carregar () {
    var msg = window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 0 && hora < 12) {
        img.src = './images/dia.svg'
        document.body.style.background = '#E0CEBC'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = './images/tarde.svg'
        document.body.style.background = '#ED9883'
    }else {
        img.src = './images/noite.svg'
        document.body.style.background = '#42324D'
    }   
}


