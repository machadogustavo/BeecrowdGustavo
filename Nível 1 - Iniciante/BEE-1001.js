const { parse } = require('path');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// console.log(lines);

// parseFloat
// parseInt

// console.log(a,b);

// var a = parseInt(lines.shift());
// var b = parseInt(lines.shift());

var a = parseInt(lines[0])
var b = parseInt(lines[1])

console.log('X = ' + (a+b));




