//let e const
//var tinha escopo de função e escopo globa
//let tem escopo de bloco, alem de função e global
//p.ex
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b)

//Template String - '', "", `${}`
const produto = 'iPad'
console.log(`${produto} é caro!`) //no caso das crases é possível ter quebra de linha
console.log(`${produto} é caro!
Caríssimo`)

//Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

//desestruturar um objeto - para desestruturar os atributos de um objeto, tem que usar chaves
const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)