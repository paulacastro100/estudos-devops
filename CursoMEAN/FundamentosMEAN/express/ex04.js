const express = require('express')
const server = express()

//USANDO O ROUTE //////////////////////////////////
//route = como mapear varias routs para a mesma url
//evita repetir a url varias vezes

server.route('/clientes')
  .get((req, res) => res.send('Lista de Clientes'))
  .post((req, res) => res.send('Novo cliente'))
  .put((req, res) => res.send('Altera cliente'))
  .delete((req, res) => res.send('Remove cliente'))


server.listen(3000, () => console.log('Executando...'))

//ROTEIRO
//1) alt + r para rodar
//2) chamar no postman os metodos abaixo e  verif msg response
