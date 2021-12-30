/*Aprendendo sobre o Sequelize que é um ORM
Nessa Aula Aprendi a conectar o node JS ao Mysql
*/
const Sequelize = require("sequelize")
const sequelize = new Sequelize('test','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(
    ()=>{
    console.log("Conectado com sucesso")
}).catch(
    (erro)=>{
    console.log('Falha ao se conectar: '+erro)
})