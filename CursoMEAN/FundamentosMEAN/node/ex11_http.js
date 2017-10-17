//SUBINDO UM SERVIDOR BASICO HTTPS COM NODEJS
//NAO VAMOS USAR ESTE EXEMPLO NA NOSSA APLICACAO
//o http eh o modulo core do node
//como alternativa, hoje usa-se muito o express

//pego uma referencia ao https
const http = require('http')
//crio uma constante e chamo a funcao createserver do http,
//que recebe como parametro uma funcao callback que vai ser
//chamada quando esta requisicao acontecer
const server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end('<h1> Acho que é melhor usar o Express, não? </h1>')
})

const porta = 3456

server.listen(porta, function(){
  console.log(`Escutando a ${porta}`)
})
