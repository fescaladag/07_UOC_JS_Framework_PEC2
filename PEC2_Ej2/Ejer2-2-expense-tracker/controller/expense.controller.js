
/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

//El controlador hace de enlace entre la vista y el modelo
//por tanto, el constructor recibe los objetos 'transactionView' y 'transactionService'

export class transactionController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    //Inicializar el resumen y las transacciones
    this.updateView();

    //Enlaza con los eventos de añadir y borrar una transaccion definidos en view
    this.view.bindAddTransaction(this.handleAddTransaction);
    this.view.bindDeleteTransaction(this.handleDeleteTransaction);
  }


//Es la función que se pasa como parametro al método 'bindAddTransaction' de la clase view
  handleAddTransaction = ({ text, amount }) => {
    if (text && amount) {
      const transaction = this.service.createTransaction(text, amount);
      this.view.addTransactionDOM(transaction);
      this.updateView();
      this.view.clearForm();
    } else {
      alert('Please add a text and amount');
    }
  };

  //Es la función que se pasa como parametro al método 'bindDeleteTransaction' de la clase view
  handleDeleteTransaction = (id) => {
    this.service.deleteTransaction(id);
    this.updateView();
  };

  //actualiza la vista por pantalla
  //para ello necesita calcular el balance y obtener todas las transacciones (metodos definidos en los service)
  //y mostrar la información por pantalla (metodo definido en view )
  updateView() {
    const summary = this.service.calculateBalance();
    this.view.displayBalance(summary);
    this.view.displayTransactions(this.service.getTrasanction());
  }
}






