const { parseArgs } = require('util');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var nome = String(lines[0])

var salarioFixo = parseFloat(lines[1])

var vendasMes = parseFloat(lines[2])


salarioFinal = ((vendasMes * 0.15) + salarioFixo).toFixed(2)


console.log(`TOTAL = R$ ${salarioFinal}`);