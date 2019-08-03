$("h1").html("Soy otro titulo JQuery")
$("#change").click(function(){
    $("h1").css('background', 'dodgerblue');
    //$(this).addClass('hide');
    $("p").toggle();
});

$(document).ready(function(){
    console.log("abrio");
});

$("#enviar").click(function(){
    let nombre = $("#nombre").val();
    let cmbText = $("#cmd option:selected").text();
    let cmbValue = $("#cmb").val();
    let checkBoolean = $("#tildado").is(':checked');
    console.log(nombre);
    console.log(cmbText);
    console.log(cmbValue);
    console.log(checkBoolean);
    
});