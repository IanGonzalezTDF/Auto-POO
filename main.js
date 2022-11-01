"use strict";
// =====================
// INTRO A POO EJERCICIOS SLIDE
// =====================
exports.__esModule = true;
var auto_1 = require("./auto");
var regAutomotor_1 = require("./regAutomotor");
var autoUno = new auto_1.Auto(false, 'Vw', 'Polo');
var autoDos = new auto_1.Auto(false, 'Fiat', 'Palio');
var listaAutos = [autoUno, autoDos];
var NuevoRegistro = new regAutomotor_1.RegistroAutomotor(listaAutos);
//MUESTRA EL NUEVO REGISTRO (QUE SOLO CONTIENE UN ARRAY DE AUTOS)
console.log(NuevoRegistro);
//SE ELIMINA UN AUTO DEL ARRAY
NuevoRegistro.eliminarAuto(autoDos);
//SE MUESTRA NUEVAMENTE LA LISTA DE AUTOS (SOLO QUEDA UNO)
console.log(NuevoRegistro);
//SE APLICA LA NUEVA FUNCION DE CONSULTAR POR LA MARCA Y MODELO DEL AUTO
NuevoRegistro.consultarAuto(autoDos);
// ===============CONSIGNA NO ENTENDIDA: "PARTIR DE LA FUNCION YA IMPLEMENTADA PARA LEER ARCHIVOS(?)"
