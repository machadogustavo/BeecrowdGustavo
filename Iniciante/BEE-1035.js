var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valoresLista = lines[0].split(' ');

var A = parseInt(valoresLista[0]);
var B = parseInt(valoresLista[1]);
var C = parseInt(valoresLista[2]);
var D = parseInt(valoresLista[3]);


const valores = function(A,B,C,D){

    if(B > C && D > A && ((C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0)){
        console.log('Valores aceitos');
    }

    else{
        console.log('Valores nao aceitos');
    }
}

valores(A,B,C,D)
