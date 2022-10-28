var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var entrada = parseInt(lines[0])
var contador = 0


while(entrada != 2002){
    entrada = parseInt(lines[contador])
    contador++

    if(entrada != 2002){
        console.log('Senha Invalida');
    }

    else{
        console.log('Acesso Permitido');
    }

}


