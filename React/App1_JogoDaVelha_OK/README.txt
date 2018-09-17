React é uma bibliotece JavaScript declarativa, eficiente e flexivel para a construcao de user interfaces.
O objetivo é compor UIs complexas códigos pequenos e isolados, chamados components.

componet class => component type
props => parametros
render => retorna a descrição do que vai ser visto na tela em um 'react element'
  ver syntax JSX

Caracteristicas:
 - usado APENAS para TELAS
 - usado para construir telas de forma declarativa
 - como a tela reage ao estado/dado
 - baseado em componentes, dá para juntá-isolados
 - declarativo
 - se quero testar, coloco os dados e vejo se reage corretamente.
 - puro JS
 - usar react para web, react native para app moveis, etc.
 - trabalha com VIRTUAL DOM, cópia em memoria do dom, cada nó com um id e cada id corresponde a um component do react. Assim, atualiza apenas aquela tag
    - DOM =  arvore de tags html
 - JSX é uma especificacao de sintaxe
    - como escrever o html um pouco diferente dentro do JS


SETUP
https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment

$ npm install -g create-react-app
$ create-react-app my-app
$ cd my-app
$ rm -f src/*


ATIVIDADES

1) passando parametros: passar a prop value para o Square
Result: mostra o numero em cada quadrado

2) componente interativo: add onClick no botao
result: ao clicar aparece um alerta


3) state - usado para lembrar de coisas


IMUTABILIDADE:
Duas formas de atulizar um dado:
1) mutate the data
2) replace with a copy

Exemplo:

    var player = {score: 1, name: 'Jeferson'};
    
    //mudando o dado - forma 1    
    player.score = 2;
    console.log(player);

    //mudando um dado - forma 2
    var newPlayer = Object.assign({}, player, {score: 3});
    player = newPlayer;
    console.log(player);

Vantagens da abordagem 'replace':
  - Avoiding direct data mutation lets us keep previous versions of the game’s history intact, and reuse them later.
  - Detection requires the mutable object to be compared to previous copies of itself and the entire object tree to be traversed. On the other hand, If the immutable object that is being referenced is different than the previous one, then the object has changed.
  - Mais facil determinar quando re-renderizar no React. Com dados imutáveis é mais fácil identificar as mudanças o que ajuda a determinar quando um componente deve ser renderizado novamente.
