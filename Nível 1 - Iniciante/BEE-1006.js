var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0])
var B = parseFloat(lines[1])
var C = parseFloat(lines[2])
MEDIA = ((A * 0.2) + (B * 0.3) + (C * 0.5)).toFixed(1)
console.log(`MEDIA = ${MEDIA}`);