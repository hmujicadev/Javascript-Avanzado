let form = document.forms.namedItem('formulario');

form.addEventListener('submit',function(event){
    let campos = new FormData();
    campos.append('nombre',form.nombre.value);
    campos.append('apellido',form.apellido.value);
    campos.append('edad',form.edad.value);
    campos.append('archivo',form.archivo.files[0]);
    for(var pair of campos.entries()) {
        console.log(pair[0]+', '+pair[1]);
      }
    event.preventDefault();
});