'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.nuevoAlumno = function nuevoAlumno (req, res, next) {
  var alumnoItem = req.swagger.params['AlumnoItem'].value;
  Admins.nuevoAlumno(alumnoItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
