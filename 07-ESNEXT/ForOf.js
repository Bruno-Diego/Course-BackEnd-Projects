for (let letra of 'Cod3r') {
    console.log(letra)
}


//o comando for IN chama o índice, ou seja, a posição do array
//ja o comando for OF, chama o valor dentro do índice, p. ex. abaixo
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//também é possível percorrer só a chave ou só o valor, conforme precisar
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

//para pegar so as entradas é possível fazer uma destructuring
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}


//é possivel usar o SET também para pegar os valores
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}