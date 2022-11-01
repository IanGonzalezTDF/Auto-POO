"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(paramListadoAutos) {
        this.listaAutos = paramListadoAutos;
    }
    RegistroAutomotor.prototype.consultarAuto = function (paramAuto) {
        for (var i = 0; i < this.listaAutos.length; i++) {
            var autoEncontrado = void 0;
            if (paramAuto.getMarca() == this.listaAutos[i].getMarca()) {
                autoEncontrado = this.listaAutos[i];
                console.log("Resultado de consulta: ".concat(autoEncontrado.getMarca(), " ").concat(autoEncontrado.getModelo()));
            }
            else {
                console.log('No se encontró la consulta');
            }
        }
    };
    RegistroAutomotor.prototype.eliminarAuto = function (paramAuto) {
        for (var i = 0; i < this.listaAutos.length; i++) {
            if (paramAuto.getMarca() == this.listaAutos[i].getMarca()) {
                this.listaAutos.splice(i, 1);
            }
        }
        console.log("El auto ".concat(paramAuto.getMarca(), " ").concat(paramAuto.getModelo(), " fue retirado."));
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
//CONSIGNA SIN ENTENDER: 
// Implementar la clase RegistroAutomotor: 
// similar al ejercicio de la clase pasada, pero
// incorporando los conceptos nuevos, y la
// clase LectorArchivos.
// FECHA 12-09
