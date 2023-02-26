var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var EntradasOne = (lines[0].split(' '))
var EntradasTwo = (lines[1].split(' '))

var xOne = parseFloat(EntradasOne[0])
var yOne = parseFloat(EntradasOne[1])


var xTwo = parseFloat(EntradasTwo[0])
var yTwo = parseFloat(EntradasTwo[1])

function CalcularDistancia(xOne,yOne,xTwo,yTwo){
    
    
    let distanciaPontos = Math.sqrt(((xTwo - xOne) ** 2) + ((yTwo - yOne) ** 2)).toFixed(4)

    console.log(distanciaPontos);


}


CalcularDistancia(xOne,yOne,xTwo,yTwo)

