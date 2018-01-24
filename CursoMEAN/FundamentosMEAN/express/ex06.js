//sobre singleton

const express1 = require('express')
const express2 = require('express')
console.log(express1 == express2)
// ok, sao a mesma instancia pois uso o require
//se uso require, o node sempre retorna uma unica instancias

const server1 = express1()
const server2 = express1()
console.log(server1 == server2)
//sao instancias diferentes

const router1 = express1.Router()
const router2 = express1.Router()
console.log(router1 == router2)
//sao instancias diferentes
//se eu quiser usar um router em outro lugar, preciso passá-lo de alguma forma
