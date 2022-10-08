var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

var valoresEntrada = lines[0].split(' ');
var A = parseFloat(valoresEntrada[0])
var numeroPositivos = 0
var media = 0

console.log(A);
console.log(numeroPositivos);
console.log(media);

function positivosMedia(A){

    for(i = 0; i < 5; i++){
        
        if(A > 0){
            numeroPositivos += numeroPositivos
            media += A
            console.log(`${numeroPositivos} valores positivos\n${media/numeroPositivos}`);
            A = parseFloat(valoresEntrada[0]++)
            console.log(numeroPositivos);
        }
       
    }

}

positivosMedia()

