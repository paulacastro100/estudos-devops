const express = require('express')
const server = express()
const router = require('./ex05_routes')

//ROUTER E PASSAGEM DE PARAMETROS PARA A ROTA //////////////////////////////////////////

//aqui o router é uma funcao middleware
server.use('/api', router)
//ex.: /api/clientes/9033

//SUBINDO O SERVIDOR
server.listen(3000, () => console.log('Executando...'))
