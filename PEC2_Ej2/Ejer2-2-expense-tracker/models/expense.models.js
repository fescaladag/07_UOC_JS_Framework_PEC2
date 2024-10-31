
//Creamos la clase 'TransactionModel' que representa la estructura de datos una transaccion cualquiera.
//Ojo, solo datos sin definitr ningún método. Eso se hará en services
export class TransactionModel {
    constructor(id, text, amount){
        this.id = id;
        this.text = text;
        this.amount = amount
    }
}



