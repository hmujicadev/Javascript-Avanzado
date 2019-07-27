$('#cmb_pais').change(buscarPaisesAjaxPost);

function buscarPaisesAjax(e){
    let pais =e.target.value;
    $.ajax({
        type:'GET',
        url:'paisesListado.php',
        data:`pais=${pais}`,
        dataType:'json',
        contentType:'application/json'
    }).done(setearCombo).fail(errorAjax);

}
function buscarPaisesAjaxPost(e){
    let pais =e.target.value;
    $.ajax({
        type:'POST',
        url:'paisesListadoPost.php',
        data:{pais:pais},
        dataType:'JSON'
    }).done(setearCombo).fail(errorAjax);

}

function errorAjax(error){
    console.log(error);
    console.log(`Hubo un error: ${error}`);
}

function setearCombo(data){
    $("#cmb_provincia").html("");
    //let paises =JSON.parse(data);
    let paises = data;
    $.each(paises ,function (k,v){
        $("#cmb_provincia").append(`<option value ='${v.provincia}'>${v.provincia}</option>`);
    })
    
}


console.log(123123213);