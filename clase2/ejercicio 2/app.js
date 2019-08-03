
/* EJERCICIO 1

let input2 = document.querySelector("#e2");
let input1 = document.querySelector("#e1");

input2.onblur = function(){console.log('hola');}

input2.addEventListener('click',()=>{ 
    console.log('hector');
    if(input1.value  == input2.value){
    }

}); 

function comparar(){
    if(input1.value == input2.value){
        input2.classList.add('ok');
        input2.classList.remove('error');
    }else{
        input2.classList.remove('ok');
        input2.classList.add('error');
    }
}

input2.addEventListener('blur', comparar);

function teSaludodenuevo(){
    console.log('hola2');
}
function saludar(){
    teSaludodenuevo();
    console.log('hola1');

}

saludar(); */

//EJERCICIO 2

let habitaciones = document.querySelectorAll('.habitacion');



function esconder(){
    for (let i = 0; i < habitaciones.length; i++) {
        habitaciones[i].classList.add('esconder');
        
    }
}

let selectHabitaciones = document.querySelector('select[name=habitacion]');

selectHabitaciones.addEventListener('change',mostrarOpcion);

function mostrarOpcion(){
    let valor = selectHabitaciones.value;
    esconder();
    if(valor == 0){
        return false;
    }

    document.querySelector('.habitacion--'+valor).classList.remove('esconder');
}

