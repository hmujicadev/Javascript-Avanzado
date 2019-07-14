/*let reg = /javascript/;
let coincide = ('Hola javascript'.match(reg));
console.log(coincide);


console.log('aabb'.match(/[0-9]/));
console.log('22 33'.match(/[^0-9]/));

console.log('22abb'.match(/\d/));

console.log('1234'.match(/\d{2}/))
console.log('1234'.match(/\d{1,3}/))
console.log('1234'.match(/\d{3,10}/))

let h1 = 'a2aaaaa2a'.match(/a\d+a/);
console.log(h1);

console.log('aaaaa'.match(/a+/));
console.log('aaaaa'.match(/a+?/));

// like 'a%'
console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*([\.\w{2,4}]?)+$/.test("juyag.u-s.ho-la@gmail.com.as"));*/

document.querySelector('#edad').addEventListener('keypress',function(event){   
    let char = event.charCode || event.keyCode;

    console.log(char);
    if(char < 48 || char > 57){
        event.preventDefault();
    }
});


document.querySelector("#edad").addEventListener('blur',function(){
    let num = document.querySelector('#edad');
    /*console.log(num);
    num.classList.add('is-invalid');
    num.setCustomValidity('Debe ingresar una edad');
    console.log(123);*/
    
    if(Number.isNaN(parseInt(num.value)) || num.value == ''){
        valido = false;
        num.classList.add('is-invalid');
        num.setCustomValidity('Debe ingresar una edad');
    }else{
        num.classList.remove('is-invalid');
        num.setCustomValidity('');
    }
    /*if(validarCampos()){
        document.querySelector("#form").submit();
    } */  
});

function validarCampos(){
    let valido = true;
    let nombre = document.querySelector("#nombre").value;
    let num = Number(document.querySelector('#edad'));
    console.log(typeof num)
    if(Number.isNaN(num.value) || num.value == ''){
        valido = false;
        num.setCustomValidity('Debe ingresar una edad');
    }
    if(nombre.trim() == ''){
        valido = false;
    }
    return valido;
}

