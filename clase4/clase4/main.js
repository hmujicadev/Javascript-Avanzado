document.addEventListener("DOMContentLoaded",function(){
	cargarTabla(1);
	seleccionarEditorial();
})

//document.querySelector("#cmb_editorial").addEventListener("change",cargarTabla(document.querySelector("#cmb_editorial").value));


var objAjax;

function cargarTabla(editorial){
	console.log(editorial);
	objAjax = new XMLHttpRequest();

	objAjax.addEventListener('load',cargarCampos);
	objAjax.addEventListener('error',errorAjax);


	objAjax.open("GET","../ajax/editorial" + editorial + ".json");

	objAjax.send();
}

function errorAjax(){
	console.log("El Ajax no funcionó correctamente");
}

function cargarCampos(){
	if(objAjax.status != 200){
		errorAjax();
	}
	var resultado = JSON.parse(objAjax.responseText);
	setearCamposTabla(resultado);
}


function setearCamposTabla(campos){
	var tbody = document.querySelector("#bodyLibros");
	tbody.innerHTML = "";
	campos.forEach(function(campo){
		var tr = document.createElement("tr");
		var tdId = document.createElement("td");
		tdId.innerHTML = campo.id;
		tr.appendChild(tdId);
		var tdNombre = document.createElement("td");
		tdNombre.innerHTML = campo.nombre;
		tr.appendChild(tdNombre);
		var tdPag = document.createElement("td");
		tdPag.innerHTML = campo.nro_paginas;
		tr.appendChild(tdPag);
		var tdEditorial = document.createElement("td");
		tdEditorial.innerHTML = campo.editorial;
		tr.appendChild(tdEditorial);
		var tdisbn = document.createElement("td");
		tdisbn.innerHTML = campo.ISBN;
		tr.appendChild(tdisbn);
		tbody.appendChild(tr);
	});
}
var combo  = document.querySelector("#cmb_editorial");
function seleccionarEditorial(){
	combo.addEventListener("change",function(){
		editorialElegida = combo.value;
		cargarTabla(editorialElegida);
	});
}