var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var id = parseInt(lines[0])
var horasTrabalhadas = parseInt(lines[1])
var valorHora = parseFloat(lines[2])
salario = (horasTrabalhadas * valorHora).toFixed(2)
console.log(`NUMBER = ${id}\nSALARY = U$ ${salario}`);