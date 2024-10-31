
/**
 * @class Service
 *
 * Manages the data of the application.

//En la clase 'TodoService' se define que es lo que se va a hacer con los datos de las transacciones
//Aqui se declaran los métodos que actuarán sobre los datos de la clase Modeo.

*/





//Es necesario importar la clase 'TransactionModel' ya que se va a crear una instancia de ella. 
import { TransactionModel } from '../models/expense.models.js';  


export class transactionService {

  //el constructor genera un objeto JSON (o array de transacciones) que almacena todas las trasacciones y las envía al Almacenamiento local 
    constructor(){
        this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    }



  // Generar un ID aleatorio único para cada transacción
   generateID = () => Math.floor(Math.random() * 100000000).toString();
   

  // Crear una nueva transacción, para ello genera una instancia de la clase Modelo
  //Lo envía al array de transacciones y actualiza el local storage
    createTransaction = (text, amount) => {
      const transaction = new TransactionModel(this.generateID(), text, parseFloat(amount));
      this.transactions.push(transaction);
      this.updateLocalStorage();
      return transaction;
}

  //Eliminar una transacción por ID, para ello actualiza el local storage representadndo todas las transacciones
  //menos aquella cuya id coincide con el parametro que se pasa a la función, que se filtra fuera del array
   deleteTransaction = (id) =>{    
      this.transactions = this.transactions.filter((transaction) => transaction.id !== id);
      this.updateLocalStorage();
} 


//Calcula el balance total entre ingresos y gastos
  calculateBalance = () => {
    //De cada transaccion  extraemos del objeto la cantidad y creamos un array con sus valores 
      const amounts = this.transactions.map(transaction => transaction.amount);
      //aplicamos el metodo reduce al array para calcular el balance total
      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
      //del array de cantidades filtramos los elementos positivos y los sumamos para representar los ingresos
      const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);

      //del array de cantidades filtramos los elementos negativos y los sumamos para representar los gastos
      const expense = (
          amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
          -1
        ).toFixed(2);

        return { total, income, expense };

  }

// Metodo utilizado para actualizar el almacenamiento local
//Alla donde se llame, envia al local storage el estado actual del array  
 updateLocalStorage = () => localStorage.setItem('transactions', JSON.stringify(this.transactions));


 // Retorna el array de trasanciones
  getTrasanction = () => this.transactions;

}
       
   