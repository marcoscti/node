/**
* Aprendendo sobre Parâmetros no node js
*/
const express = require("express")
const app = express();

app.get("/",(req,res)=>{
  res.send("Olá");
})
app.get("/user/:nome",(req,res)=>{
  //res.send(req.params);
  res.send(req.params.nome)
})

app.listen(8081,(req,res)=>{
  console.log("Servidor Rodando");
});
