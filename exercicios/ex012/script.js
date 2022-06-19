function carregar() {
    var hora = document.getElementById("hora")
    var img = document.getElementById("imagem")
    var data = new Date()
    var m =data.getMinutes()
    var msg = data.getHours()
    hora.innerHTML = `Agora é ${msg}:${m}`
    if (msg >= 0 && msg < 12)
    {
        document.body.style.backgroundColor='#DBE716'
        img.src="m.JPG"
        //Bom dia
    }
    else if(msg >= 12 && msg <= 18)
    {   img.src="t.JPG"
    document.body.style.backgroundColor='#DB6708'
        //Boa tarde
    }
    else {
        img.src="n.JPG"
        document.body.style.backgroundColor='#0B005C'
        //Boa Noite
    }
}