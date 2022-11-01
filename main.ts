// =====================
// INTRO A POO EJERCICIOS SLIDE
// =====================


import { Auto } from "./auto";
import {RegistroAutomotor} from "./regAutomotor";

let autoUno = new Auto (false, 'Vw', 'Polo');
let autoDos = new Auto (false, 'Fiat', 'Palio');

let listaAutos:Auto[] = [autoUno, autoDos];

let NuevoRegistro:RegistroAutomotor = new RegistroAutomotor (listaAutos);

//MUESTRA EL NUEVO REGISTRO (QUE SOLO CONTIENE UN ARRAY DE AUTOS)
console.log(NuevoRegistro);
//SE ELIMINA UN AUTO DEL ARRAY
NuevoRegistro.eliminarAuto(autoDos);


//SE MUESTRA NUEVAMENTE LA LISTA DE AUTOS (SOLO QUEDA UNO)
console.log(NuevoRegistro)
//SE APLICA LA NUEVA FUNCION DE CONSULTAR POR LA MARCA Y MODELO DEL AUTO
NuevoRegistro.consultarAuto(autoDos);
// ===============CONSIGNA NO ENTENDIDA: "PARTIR DE LA FUNCION YA IMPLEMENTADA PARA LEER ARCHIVOS(?)"