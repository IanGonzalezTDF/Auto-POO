"use strict";
// =======
// FECHA: 06-09-2022
// =======
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(paramPrender, paramMarca, paramModelo) {
        this.estaPrendido = paramPrender;
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }
    Auto.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.setMarca = function (paramMarca) {
        this.marca = paramMarca;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setModelo = function (paramModelo) {
        this.modelo = paramModelo;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    return Auto;
}());
exports.Auto = Auto;
