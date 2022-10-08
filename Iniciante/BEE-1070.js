var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

var num = parseInt(lines[0])

function numeroImpares(num){

    for(i=0; i < 13; i++){

        if(num % 2 != 0){
            console.log(`${num}`);
        }
        num = parseInt(lines[0]++)

    }

}

numeroImpares()