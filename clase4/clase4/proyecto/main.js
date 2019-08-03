let email = document.querySelector('#email');
let loading = document.querySelector('.spinner-border');
let alerta = document.querySelector('.alert');

email.addEventListener('focusout', function(){
    loading.classList.remove('hide');
    alerta.classList.add('hide');
    setTimeout(function(){
        validarEmail();
    }, 3000)
});

function validarEmail(){
    if(window.XMLHttpRequest){
        objAjax = new XMLHttpRequest;
    }else if(window.ActiveXObject){
        objAjax = new ActiveXObject("MicrosoftXMLHTTP");
    }else{
        console.log('Ajax no habilitado');
        return false;
    }
    objAjax.onreadystatechange = callback;

    let txtEmail = email.value; 
    objAjax.open('GET', `http://127.0.0.1:8124/?email=${txtEmail}`);
    objAjax.send(null);
}

function callback(){
    if(objAjax.readyState === 4 && objAjax.status === 200){
        let respuesta = objAjax.responseText;
        if(respuesta === 'existe'){
            alerta.classList.remove('hide');
            loading.classList.add('hide');
            document.querySelector('.btn').setAttribute('disabled', true);
        }else{
            alerta.classList.add('hide');
            loading.classList.add('hide');
            document.querySelector('.btn').removeAttribute('disabled');
        }
    }
}