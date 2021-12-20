/**
*Após ter aprendido sobre criação de um servidor básico, aprendi sobre módulos do node, especificamente o express
após baixar o módulo atribui ele a uma variável.
e gerei algumas rotas do tipo GET
*/
const express = require('express');
const app = express();

app.get("/",function(request,response){
  response.send("Seja bem vindo")
});
app.get("/sobre",function(request,response){
  response.send("Você está na rota: sobre")
})
app.listen(8081,function(){
  console.log("Servidor rodando")
});
