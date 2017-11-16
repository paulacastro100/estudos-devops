const express = require('express')
const server = express()

//EXEMPLO DE CADEIA DE MIDDLEWARE /////////////////////
//METODO USE:
// * posso passar por todos os metodos http
// * considera o inicio da requisicao
//USE VS GET:
//Se uso get, só funciona /api (requisicao toda)
//Se uso 'use', funciona para /api/balbalba (inicio da req)

//MIDLLEWARE 1 É A FUNCTION
server.use('/api', function(req, res, next){
  console.log('Inicio...')
  next()  //chamo a cadeia
  console.log('Fim...') //eh executado apos a cadeia.
})

//MIDLLEWARE 2
server.use('/api', function(req, res, next){
  console.log('Resposta...')
  res.send('<h1> API!</h1>') //Aparece no browser
})

/*server.use(function(req, res, next){
  console.log('Resposta...')
  res.send('<h1> API!</h1>')
})*/

server.listen(3000, () => console.log('Executando...'))


//ROTEIRO (alt + r para rodar)
//1) Chamar no browser http://localhost:3000/apiX
//2) olhar na console a ordem de execucao
