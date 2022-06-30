var num = 8 
var amigo ={nome:'Kallel',
sexo:'M',
peso: 85.5,
emagrecer(p=0){
    console.log('emagrecer')
    this.peso -= p
}
}
console.log(num**=2)
amigo.emagrecer(5)
console.log(`${amigo.nome} peso ${amigo.peso}kg`)