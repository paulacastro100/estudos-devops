const PI = 3.14
console.log(global.PI)

global.obj = { name: "Estou no global!"}
//ainda nao exportei este objeto


/*
quando vc deblara uma constante dentro de um modulo,
voce nao esta usando ela no global.
O node te ajuda a evitar isso */
//window - objeto global
