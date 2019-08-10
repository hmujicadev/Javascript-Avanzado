'use strict'
let obj = {};
obj.nombre = "Maria";
//obj.setNombre(valor);
obj['apellido'] = 'Rodriguez';
/* 
    {
        nombre: "Maria",
        apellido: "Rodriguez",
        saludar: function(){},
        mascota: {

        }
    }

Auto auto = new Auto();
class Auto {}

objeto(prototipo) => objeto
*/
console.log(obj);

let objDue = {
    nombre: "Ramon",
    apellido: "Perez",
    nombreCompleto: function(){
        console.log(`Mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`)
    }
}
objDue.nombreCompleto();

let persona = {
    nombre: "Jose",
    apellido: "Perez"
}

//persona.edad = 33;
persona.esMayor = function(){
    if(this.edad > 18){
        console.log("Es mayor de edad");
    }else{
        console.log(this.edad);
        console.log("No es mayor de edad");
    }
}


//persona.edad = 11;
persona.esMayor();

persona.edad = 33;

persona.esMayor();

delete persona.edad;
console.log(persona)


let camponombre = 'nombre';
console.log(persona)

// persona.nombre
// persona['nombre]

let otroObj = new Object();
console.log(typeof otroObj);

console.log("El contenido del objeto recien creado es: " + JSON.stringify(otroObj));
/* 
CONSTRUCTORES
Es una funcion que se usa para crear nuevos objetos, los objetosn pueden ser creados usando el constructor
mediante estos dos pasos;
1- Definir el objeto original definiendo el constructor. Por convencion el nombre del constructor debecomenzar por mayuscula.
2- Debemos instanciar el objeto mediante la palabra reservada new

*/

function otraPerso(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}





