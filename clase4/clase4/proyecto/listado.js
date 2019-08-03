let grupo = document.querySelector('#grupo');
let ajax;
grupo.addEventListener('change', cargarSuperHeroes);

function cargarSuperHeroes(){
    let idGrupo = grupo.value;
    let url = 'http://localhost:8124';
    ajax = new XMLHttpRequest();

    ajax.addEventListener('load', response);
    ajax.addEventListener('error', errorAjax);

    ajax.open('POST', url);
    ajax.send(idGrupo);
}
function response(){
    if(ajax.status != 200){
        errorAjax();
        
    }
    document.querySelector('#listado').innerHTML = ajax.responseText;
}
function errorAjax(){
    console.log("error en ajax")
}