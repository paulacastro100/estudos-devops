const express = require('express')
const server = express() //ou app. crio uma instancia do express

//MAPEANDO AS URLS NO express
//Sao 3 funcoes middleware

//get url e funcao middleware
server.get('/', function(req, res){
  res.send('<h1>Index!</h1>')
})
//p.s.no js, posso suprimir os ultimos parametros da funcao
//qualquer requisicao para /teste...
server.all('/teste', function(req, res){
  res.send('<h1>Teste!<h1>')
})
//contem 'api'...ps. case sensitive
server.get(/api/, function(req, res){
  res.send('<h1>API!</h1>')
})
//SUBINDO O SERVIDOR

server.listen(3000, () => console.log('Executando...'))


//ROTEIRO
//1) Chamar no browser http://localhost:3000/ => Index
//2) Chamar no browser http://localhost:3000/teste => Teste
//3) Chamar no browser http://localhost:3000/api => API
