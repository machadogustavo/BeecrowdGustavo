var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var prodOne = (lines[0].split(' '))
var prodTwo = (lines[1].split(' '))

var prodOnePeca = parseInt(prodOne[0])
var prodOneQuant = parseInt(prodOne[1])
var prodOneValor = parseFloat(prodOne[2])

var prodTwoPeca = parseInt(prodTwo[0])
var prodTwoQuant = parseInt(prodTwo[1])
var prodTwoValor = parseFloat(prodTwo[2])

console.log(`VALOR A PAGAR: R$ ${((prodOneValor * prodOneQuant) + (prodTwoValor * prodTwoQuant)).toFixed(2)}`);
