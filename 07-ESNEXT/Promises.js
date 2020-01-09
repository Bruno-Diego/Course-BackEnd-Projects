//é uma promessa
//se usa quando quer obter algum tipo de processamento assincrono
//a promessa pode ser atendida ou rejeitada

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //o resolve aceita apenas um unico parametro
        }, segundos * 1000)
    })
}

//a promisse tem uma função que se chama THEN, que resolve a promise passando o objeto que se deseja
//quando fica encadeado, o resultado de um vai passando para o outro
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    //o catch é usato para tratar eventual erro que aconteça
    .catch(e => console.log(e))