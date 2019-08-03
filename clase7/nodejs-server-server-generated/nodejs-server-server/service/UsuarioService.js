'use strict';


/**
 * obtener alumnos
 * Obtener el listado de alumnos 
 *
 * returns List
 **/
exports.obtenerAlumnos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "curso" : "PHP",
  "apellido" : "Perez",
  "id" : 12,
  "nombre" : "Jose"
}, {
  "curso" : "PHP",
  "apellido" : "Perez",
  "id" : 12,
  "nombre" : "Jose"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

