var agora = new Date()
var hora = agora.getHours()
console.log(`Agoração exatamente ${hora} horas `)
if (hora < 12 ){
    console.log('BOM DIA')
}
else if (hora <= 18){
    console.log('BOA TARDE')
}
else if( hora >= 19){
    console.log('BOA NOITE')
}