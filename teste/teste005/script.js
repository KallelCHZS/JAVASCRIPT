var num = document.getElementById('txtn')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var velores = []

function  isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function alista(n,l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !alista(num.value, valores)){
        window.alert('Tudo ok')
    }else{
        window.alert ('Valor invalido ou já encontrado na lista.')
    }
}