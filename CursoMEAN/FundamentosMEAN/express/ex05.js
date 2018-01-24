const express = require('express')
const server = express()
const router = require('./ex05_routes')



//PARA EXECUTAR -> ALT + R
//ROUTER E PASSAGEM DE PARAMETROS PARA A ROTA //////////////////////////////////////////

//aqui o router é uma funcao middleware
server.use('/api', router)
//ex.: /api/clientes/9033
//ex.:http://localhost:3000/api/clientes/1/marcos
//ex.:http://localhost:3000/api/clientes/1/marcos

//SUBINDO O SERVIDOR
server.listen(3000, () => console.log('Executando...'))
