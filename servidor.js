/*
* Aprendendo sobre  o módulo HTTP
* Para executar esse arquivo no node vc deve abrir o terminal na pasta onde está o seu projeto e executar o comando: node servidor.js
  ele irá criar o servidor e para acessá-lo vá na barra de endereços do seu navegador e digite localhost:8081 
*/

//Na variável http estou fazendo uma requisição do módulos http do node
 var http = require('http');
//atribui o método createServer na variável http
 http.createServer(
   //Criei uma função anônima no mfunção createServer passando dois argumentos: request e response
   function(request, response){
  //criei uma mensagem dentro do response passado dentro da função end() que me parece ser semelhante a um "return";
   response.end("Hello")
 }).listen(8081);
 //A opção funcao listen atribui a porta que desejo para a minha aplicação

//A mensagem abaixo é apenas para exibir uma mensagem
 console.log("O server is load");
