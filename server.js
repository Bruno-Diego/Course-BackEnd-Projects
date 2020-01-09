const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //esse comando faz com que todos os arquivos desta pasta fiquem disponíveis para acesso do server.js
app.use(bodyParser.urlencoded({ extended: true })) //se vier uma submit de um formulário, esse cod converte em objeto
app.use(bodyParser.json()) //Se vier um JSON no corpo da requisição, esse é o comando que transforma o json em objeto

const multer = require('multer') //usado no exerc. xmlhttprequest2 - serve para interpretar o formulario que veio do arquivo de upload
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer ({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro!')
        }
        res.end('Concluído com sucesso!')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        //pelo express, existem algumas formas de se receber dados do frontend...
        //uma delas é o req.body...
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //outra forma de se receber dados do frontend é..
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

//app.get('/teste', (req, res) => res.send('OK ' + new Date))
app.listen(8080, () => console.log('Executando...'))
//se uma porta já estiver sendo usada, é possível utilizar outra porta ou fechar o processo que está sendo usado naquela...
