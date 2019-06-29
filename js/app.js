function imp(x){
    console.log(x);
}

var a = 14;
var a="hola";
a ="hola";

//el let no permite redeclarar una variable
let b =true;

//let b =false; //si se habilita esta lìnea provocaria un error

const c ="No cambiuo nada";

let j=3;
let i ="3";
//comparacion de variables
if(j===i){
    imp('son iguales');
}else{
    imp('no son iguales');
};

//ciclos y bucles
let arr = ['hola', 'como','estas'];

for (let i = 0; i < arr.length; i++) {
    imp(arr[i] + "");
}

for (let line = '#'; line.length < 8; line+='#') {
    imp(line);
    
}