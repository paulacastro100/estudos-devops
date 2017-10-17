//ESTE MODULO NAO SERA USADO NA NOSSA APLICACAO
//fs nao eh preciso instalar - esta no core do node
//filesystem
const fs = require('fs')
const files = fs.readdirSync(__dirname)

files.forEach(f => console.log(f))
//__dirname eh uma constante globalmente
//__filename eh uma constante globalmente

// console.log(__filename)
