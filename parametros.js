/**
  * Aprendendo sobre Parâmetros no node js
*/
const express = require("express")
const app = express();

/*app.get("/",(req,res)=>{
  res.send("Olá");
})*/
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/html/index.html")
})
app.get("/sobre",(req,res)=>{
  res.sendFile(__dirname+"/html/sobre.html")
})
app.get("/user/:nome",(req,res)=>{
  //res.send(req.params);
  res.send(req.params.nome)
})

app.listen(8081,(req,res)=>{
  console.log("Servidor Rodando");
});
