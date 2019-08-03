let titulo = document.querySelector('h1');
titulo.innerHTML='Otro título';

let txt_num1= document.createElement('input');
let txt_num2= document.createElement('input');

txt_num1.value = 0;
txt_num2.value = 0;

txt_num1.setAttribute('type','number');
txt_num2.setAttribute('type','number');

txt_num1.setAttribute('id','num1');
txt_num2.setAttribute('id','num2');




txt_num1.classList.add('form-control');
txt_num2.classList.add('form-control');

let div1=document.querySelector('#n1');
div1.appendChild(txt_num1);

let div2=document.querySelector('#n2');
div2.appendChild(txt_num2);

function ejecutar(){
    let seleccion =document.getElementById('op')
    let operacion=
    Number(seleccion.options[seleccion.selectedIndex].value;
    console.log('Boton Enviar:',operacion);
    let num1 =Number(document.querySelector('#num1').value);
    let num2 =Number(document.querySelector('#num2').value);

    let resultado = 0;
    
    switch (operacion) {
        case 1:
            resultado=num1+num2
            break;
        case 2:
            resultado=num1-num2
            break;
        case 3:
            resultado=num1*num2
            break;
        case 4:
            if(num2 ==0){
                return false;
            }
            resultado=num1/num2
            break;
    
        default:
            resultado= 'Indefinido';
            break;

    }

    document.querySelector('#resultado').innerHTML=resultado;
    

}





