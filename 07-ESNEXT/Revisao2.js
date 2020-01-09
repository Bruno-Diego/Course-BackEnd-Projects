//Arrow function - sempre é anonima, não é atribuido um nome pra ela
//return sempre é implícito
const soma = (a, b) => a + b
console.log(soma(2, 3))

//arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametros default 
function log(texto = 'Node'){
    console.log(texto)
}
log() //vai aparecer o valor padrão
log(undefined) //aparece valor padrao
log(null)
log('Sou mais forte')

//operador Rest (agrupar) - em certos contestos se chama spread
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))