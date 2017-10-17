//lodash
const _ = require('lodash')

const alunos = [{
  nome: 'Joao',
  nota: 7.6
}, {
  nome: 'Maria',
  nota: 8.6
}, {
  nome: 'Pedro',
  nota: 8.1
}]

//usando funcao do lodash
const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)


//arquivo de metadados, descritor do node para declarar as dependências
