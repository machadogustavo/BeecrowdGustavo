
var entrada = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
entrada.shift();
var x = entrada[0].split(' ').map(x => Number(x));

console.log(`Menor valor: ${Math.min(...x)}`);
console.log(`Posicao: ${x.indexOf(Math.min(...x))}`);