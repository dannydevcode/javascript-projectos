//clase hija cada uno de los elementos va a tener un ID unico
class Ingreso extends Dato{
    static contadorIngresos = 0;
    
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}