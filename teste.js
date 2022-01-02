/*Aprendendo sobre o Sequelize que é um ORM
Nessa Aula Aprendi a conectar o node JS ao Mysql
*/
const Sequelize = require("sequelize")
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
/*
sequelize.authenticate().then(
    ()=>{
    console.log("Conectado com sucesso")
}).catch(
    (erro)=>{
    console.log('Falha ao se conectar: '+erro)
})
*/
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/*Postagem.create({
    titulo:"Teste de criação",
    conteudo: "Craindo conteudos para o nmysql pelo node js"
})
*/
Usuario.create({
    nome: "Marcos",
    sobrenome: "Cordeiro",
    idade: 28,
    email: "marcosc974@gmail.com"
})
//Postagem.sync({force:true})
//Usuario.sync({force:true})
