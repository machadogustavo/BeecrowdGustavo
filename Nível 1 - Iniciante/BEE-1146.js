var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X, Y;
var string = ""
var vetor = [];

for(i=0;i<lines.length;i++){
    X = parseInt(lines[i]);
    if (X === 0){
        console.log(string.trim());
        break;
    }
    else{
        for(z=1;z<=X;z++){
            if(z===X){
                string += z+"\n";
            }else{
                string += z +" ";
            }
        }
    }
}




