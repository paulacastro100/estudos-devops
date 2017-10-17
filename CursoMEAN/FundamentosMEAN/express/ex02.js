const express = require('express')
const server = express()

//EXEMPLO DE CADEIA DE MIDDLEWARE /////////////////////

//MIDLLEWARE 1
server.get('/', function(req, res, next){
  console.log('Inicio...')
  next()  //chamo a cadeia
  console.log('Fim...')
})

//MIDLLEWARE 2
server.get('/', function(req, res, next){
  console.log('Resposta...')
  res.send('<h1> Olá Express!</h1>')
})
server.listen(3000, () => console.log('Executando...'))
