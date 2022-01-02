const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const res = require("express/lib/response");
const bodyParser = require("body-parser");
const Post = require('./models/Post');


//Config
//Template Engine
//const hbs = handlebars.create({ defaultLayout: 'main' });
//app.engine('handlebars', () => { hbs })
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')
//Configurar o body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas da Aplicação
app.get('/', (req, res) => {
    Post.findAll().then((posts) => {
        res.render('home', { post: posts })
    });
})

app.get('/new', (req, res) => {
    res.render('formulario')
    //res.send("Rota Novo")
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send("Houve um erro: " + erro)
    })
})

app.listen(8081, () => {
    console.log("Servidor rodando")
});