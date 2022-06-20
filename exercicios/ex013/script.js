function verificar()
{
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tenti novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero= 'Homem'
            if(idade >=0 && idade < 10 ){
                //criança
                img.setAttribute('src','imagens/h_bebe.jpg')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','imagens/h_jovem.jpg')
            }
            else if (idade <50){
                //adulto
                img.setAttribute('src','imagens/h_adulto.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','imagens/h_idoso.jpg')
            }
        }
        else if(fsex[1].checked){
            genero='Mulher'
            if(idade >=0 && idade < 10 ){
                //criança
                img.setAttribute('src','imagens/m_bebe.jpg')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','imagens/m_jovem.jpg')
            }
            else if (idade <50){
                //adulto
                img.setAttribute('src','imagens/m_adulta.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','imagens/m_idoso.jpg')
            }
        }
        res.innerHTML = `Detequitamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}