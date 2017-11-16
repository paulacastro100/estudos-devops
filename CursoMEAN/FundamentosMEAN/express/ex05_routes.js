const express = require('express')
const router = express.Router() //criando uma instancia do router

//ROUTER E PASSAGEM DE PARAMETROS PARA A ROTA//////////////////////////////////////////

//ROUTER É UMA MINIAPLICAÇÃO COM VARIOS SVCS DENTRO
//EH UM SUBCONJUNTO DE ROTAS
//ps. posso ter varias instancias de router, para
//mapear coisas diferentes...

//MIDDLEWARE COM PARAMETROS E FUNCAO ARROW
//este middleware será usado para todas as requisicoes
//calcula o tempo da reuisicao
router.use(function (req, res, next) {
  const init = Date.now()
  next()
  console.log(`Tempo = ${Date.now() - init} ms.`)
})

//funcao arrow
router.get('/produtos/:id', (req, res, next) => {
//o parametro veio da requisicao = req.params.id
    res.json({id: req.params.id, name: 'Caneta'}) //alem de ser o responso, digo que é json
})

router.get('/clientes/:id/:name', (req, res, next) =>{
  res.json({id: req.params.id, name: req.params.name})
})

//exportar
module.exports = router
