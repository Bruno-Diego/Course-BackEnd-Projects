//Ja existe uma estrutura de relação chave/valor em objeto
//a diferença para o MAP é que no objeto o valor é apenas um literal, uma string p. ex
//no caso de um MAP a chave pode ser uma função, pode ser um numero, um objeto etc
//a flexibilidade é maior
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) //não funciona assim
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //has é o comando que diz se o elemento está ou nao contido nesse map
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') //a chave nao aceita mais de um valor na mesma chave
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)