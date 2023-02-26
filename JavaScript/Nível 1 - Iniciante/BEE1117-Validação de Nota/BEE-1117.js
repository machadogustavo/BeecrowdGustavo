var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var nota = parseFloat(lines[0]);
var notas = [];

const validarNotas = function () {
let contador = 0;

  while (contador < 4) {
    if (nota < 0 || nota > 10) {
      console.log("Nota Inválida");
      contador++;
    } else {
      notas.push(nota);
      contador++;
    }
  }

if(notas.length > 0){
    const somaNotas = notas.reduce(function (total, numero) {
        return total + numero;
      });

      console.log(`media = ${(media = somaNotas / notas.length)}`);
    };
}

validarNotas();
