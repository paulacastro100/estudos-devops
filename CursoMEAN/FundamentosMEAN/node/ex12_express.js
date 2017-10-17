
//APENAS ANOTACOES

/*O Express é um framework web para NODEJS
Prove conteudo estatico, api REST, conteudo dinamico (html)
Arquitetura bem minimalista e eficiente
ex: ""/teste com get chama o metodo X"

Principal conceito: Chain of Responsability vs Middleware:
Quando o express intercepta a requisicao, a forma como se
configura a requisição no express é colocando middlewares
São funcoes com uma assinatura padrao que vamos encadeando
uma atras da outra
O middleware ou passa a resposta para o browser ou passa a
request para o proximo da corrente.
p.s.: funcao = request response e request

var mid1 = function(req, resp, next){
  //faz algo
  next() //chamo o proximo middleware
  ou
  resp.send('..')
}
server.use(mid1)  //todas as requisicoes serao interceptadas por este middleware
server.use('/api', mid1)  //middleware so sera invocado quando bater nesta url.

ps. o Node Restiful também tem esta caracteristica de middleware
*/
