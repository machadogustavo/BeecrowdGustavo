var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var entrada = parseInt(lines[0])

var alcool = 0
var gasolina = 0
var diesel = 0

var contador = 0


while(entrada != 4){
    
    if(entrada == 1){
        alcool++
    }

    else if(entrada == 2){
        gasolina++
    }

    else if(entrada == 3){
        diesel++
    }

    entrada = parseInt(lines[contador])
    contador++
}

console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`);

