//console.log(process.argv)
//o process eh um objeto disponivel globalmente no node
//a partir do process.argv vc tem acesso aos dados de entrada

function temParam(param){
  return process.argv.indexOf(param) !== -1
  //se == -1, param nao existe
}

if(temParam('--producao')){
    console.log('Atenção total!')
} else {
  console.log('Tranquilo!!!')
}
