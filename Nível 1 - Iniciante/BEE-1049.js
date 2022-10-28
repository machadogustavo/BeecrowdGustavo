var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

var escolha1 = lines.shift().trim();
var escolha2 = lines.shift().trim();
var escolha3 = lines.shift().trim();

function animal(escolha1, escolha2, escolha3) {
    
//VERTEBRADO

  //VERTEBRADO-AVE-CARNIVORO-AGUIA
  if (escolha1 == 'vertebrado' && escolha2 == 'ave' && escolha3 == 'carnivoro') {
    console.log('aguia');
  }
  //VERTEBRADO-AVE-ONIVORO-POMBA
  if (escolha1 == 'vertebrado' && escolha2 == 'ave' && escolha3 == 'onivoro') {
    console.log('pomba');
  }
  
  //VERTEBRADO-MAMIFERO-ONIVORO-HOMEM
  if (escolha1 == 'vertebrado' && escolha2 == 'mamifero' && escolha3 == 'onivoro') {
    console.log('homem');
  }
  //VERTEBRADO-MAMIFERO-HERBIVORO-VACA
  if (escolha1 == 'vertebrado' && escolha2 == 'mamifero' && escolha3 == 'herbivoro') {
    console.log('vaca');
  }

//INVERTEBRADO

  //INVERTEBRADO-INSETO-HEMATOFAGO-PULGA
  if (escolha1 == 'invertebrado' && escolha2 == 'inseto' && escolha3 == 'hematofago') {
    console.log('pulga');
  }
  //INVERTEBRADO-INSETO-HEMATOFAGO-PULGA
  if (escolha1 == 'invertebrado' && escolha2 == 'inseto' && escolha3 == 'herbivoro') {
    console.log('lagarta');
  }
  //INVERTEBRADO-ANELIDEO-HEMATOFAGO-SANGUESSUGA
  if (escolha1 == 'invertebrado' && escolha2 == 'anelideo' && escolha3 == 'hematofago') {
    console.log('sanguessuga');
  }
  //INVERTEBRADO-ANELIDEO-ONIVORO-MINHOCA
  if (escolha1 == 'invertebrado' && escolha2 == 'anelideo' && escolha3 == 'onivoro') {
    console.log('minhoca');
  }
}

animal(escolha1,escolha2,escolha3)
