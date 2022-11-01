import { Auto } from "./auto";

export class RegistroAutomotor{
    protected listaAutos:Auto[];

    constructor (paramListadoAutos:Auto[]){
        this.listaAutos = paramListadoAutos;
    }

    public consultarAuto(paramAuto:Auto):void{
        for (let i:number=0; i<this.listaAutos.length; i++){
            let autoEncontrado: Auto;
            
            if(paramAuto.getMarca() == this.listaAutos[i].getMarca()){
                autoEncontrado = this.listaAutos[i]
                console.log(`Resultado de consulta: ${autoEncontrado.getMarca()} ${autoEncontrado.getModelo()}`)
        }

            else{
                console.log('No se encontró la consulta')
            }
        }
    }

    public eliminarAuto(paramAuto:Auto):void{
        for(let i:number=0;i<this.listaAutos.length;i++){
            if(paramAuto.getMarca() == this.listaAutos[i].getMarca()){
                this.listaAutos.splice(i,1)
            }
        }console.log(`El auto ${paramAuto.getMarca()} ${paramAuto.getModelo()} fue retirado.`)
    }


}

//CONSIGNA SIN ENTENDER: 
// Implementar la clase RegistroAutomotor: 
// similar al ejercicio de la clase pasada, pero
// incorporando los conceptos nuevos, y la
// clase LectorArchivos.
// FECHA 12-09