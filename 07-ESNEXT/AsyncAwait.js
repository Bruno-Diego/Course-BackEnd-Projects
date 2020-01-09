//Aqui usamos inicialmente o mesmo exemplo do promise
//mais a frente usamos Async/Await

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

//Async/Await
//é um recurso do ECMAScript08
//objetivo de simplificar o uso de promises
//A constante só funciona se estiver marcada com o comando async
//Async será uma função dentro de uma constante ou variável, Await é o comando dentro da função

let obterAlunos = async () => {
    //dentro da função async, dai sim será possível usar Await
    //ta = TurmaA
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} //retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))