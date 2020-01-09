//Tagged Templates - processa o template dentro de uma função
//serve para processar uma template string em uma função
//template string é o texto dentro da forma `${}`
function tag(partes, ...valores){ //valores é o que foi interpolado dentro da template string
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
//a string resultante será composta por mais de 1 array;
//a ordem dos elementos do array será em ordem alternada na string.
//p. ex. [ '', = array[0]          ...        ' está ' = array[2],           ...             '.' = array[4]]
//  [                      'Gui' = array[1],           ...             'Aprovado' = array[3] ]