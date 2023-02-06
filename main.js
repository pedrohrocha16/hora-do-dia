function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var body = window.document.getElementsByTagName('body')[0]
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hour = data.getHours()
    var minutes = data.getMinutes()
    msg.innerHTML = `Neste exato momento são: ${hour}:${minutes}Hrs`

    if (hour >= 0 && hour < 12){
        img.src = 'img/manha.jpg'
        body.style.background = '#315d81'
        msg2.innerHTML = ('Tenha um bom dia!')
    } else if (hour >= 12 && hour < 17){
        img.src = 'img/tarde.jpg'
        body.style.background = '#1e605a'
        msg2.innerHTML = ('Tenha uma boa tarde!')
    } else {
       img.src = 'img/noite.jpg'
       body.style.background = 'gray'
       msg2.innerHTML = ('Tenha uma boa noite!')
    }
}



