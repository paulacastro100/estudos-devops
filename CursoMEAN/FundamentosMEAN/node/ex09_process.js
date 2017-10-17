/*objetivos:
 - imprimir algo na console usando process
 - inserir algo usando process
Vamos usar a entrada e saida padrões
 */
 process.stdout.write('Está gostando do curso?')

 //data é um evento que acontece quando vc escreve e aperta ENTER
 process.stdin.on('data', function(data){
   process.stdout.write(`Sua resposta foi ${data.toString()} Obrigado!`)
   process.exit()
 })
