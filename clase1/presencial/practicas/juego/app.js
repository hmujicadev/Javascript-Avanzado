//variables y constantes
var aleatoryNumbers;

//Boton inicio del Juego
document.querySelector('#nuevo').addEventListener('click',init);
function init(){
  GenNumber();
}
//funcion para generar los numeros aleatorios
function GenNumber(){
  let newaleatoryNumber
  let max=9;
  let min=1;
  for (let i = 1; i < 4; i++) {
    newaleatoryNumber= parseInt((Math.random() * (max-min)+i));
  console.log(newaleatoryNumber)

    
  }
  
}