function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `${hora}:${minutos}:${segundos}`

    if (hora >= 0 && hora < 12) {
        img.src = 'mor.png'
        document.body.style.background = '#1f374c'


    } else if (hora > 12 && hora <= 18) {
        img.src = 'af.jpg'
        document.body.style.background = '#ff8c11'

    } else {
        img.src = 'evening.png'
        document.body.style.background = '#044c78'
    }

}