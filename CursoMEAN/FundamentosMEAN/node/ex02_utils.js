//um arquivo dentro do node é um modulo
//tudo que tem aqui dentro é visivel apenas ao modulo
//exceto o que tem em module.exports

//funcao
function upper(text){
  return text.toUpperCase()
}

//tornar publica
module.exports =  { upper } //forma reduzida, bjeto que só tem a funcao upper
//module.exports =  { upper:upper } //forma completa
