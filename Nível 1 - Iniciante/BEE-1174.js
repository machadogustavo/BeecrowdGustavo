var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = parseFloat(lines.shift());
var array = [];
var array_answer = [];

for(let i = 0; i <= 99; i++){
    array.push(number);
    number = parseFloat(lines.shift());
}

for(let i = 0; i < array.length; i++){
  if(array[i] <= 10){
    array_answer[i] = array[i];
    number = parseFloat(lines.shift());
  }
  else{
    number = parseFloat(lines.shift());
  }
}

for(let i = 0; i <= array_answer.length; i++){
  if(array_answer[i] == undefined){

  }
  else{
  console.log(`A[${i}] = ${array_answer[i].toFixed(1)}`);
}
}