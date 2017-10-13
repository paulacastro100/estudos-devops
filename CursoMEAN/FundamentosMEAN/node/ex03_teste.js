//chamei das vezes o mesmo modulo, atribuido a duas constantes
const s1 = require('./ex03_singleton')
const s2 = require('./ex03_singleton')

s1.exibirProximo()
s2.exibirProximo()
s1.exibirProximo()
s2.exibirProximo()

//neste caso, ambas as constantes apontam para o mesmo modulo
//sempre a mesma instancia do modulo eh devolvida para quem o chama
//se eu quiser uma nova instancia, devo encapsular em uma funcao, algo assim...
