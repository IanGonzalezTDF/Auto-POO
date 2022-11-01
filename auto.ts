// =======
// FECHA: 06-09-2022
// =======

export class Auto {
    private estaPrendido:boolean;
    private marca:string;
    private modelo:string;

    constructor (paramPrender:boolean, paramMarca:string, paramModelo:string){
        this.estaPrendido = paramPrender;
        this.marca = paramMarca;
        this.modelo = paramModelo;
    }

    public prenderApagar():void{
        if(this.estaPrendido === true){
            this.estaPrendido = false;
        }else{
            this.estaPrendido = true;
        }
    }

    public setMarca(paramMarca:string):void{
        this.marca = paramMarca;
    }

    public getMarca():string {
        return this.marca;
    }

    public setModelo(paramModelo:string):void{
        this.modelo = paramModelo;
    }

    public getModelo():string{
        return this.modelo;
    }
}

