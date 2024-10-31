/**
 * @class View
 *
 * Visual representation of the model.
 

//En la clase 'trasactionView' se definene todos los metodos relativos a la representación por pantalla 
e interacción con el DOM

*/

//En el constructor se define los elementos del DOM que se mostraran por pantalla
export class transactionView{
    constructor(){
       this.balance = document.getElementById('balance');
       this.money_plus = document.getElementById('money-plus');
       this.money_minus = document.getElementById('money-minus');
       this.list = document.getElementById('list');
       this.form = document.getElementById('form');
       this.text = document.getElementById('text');
       this.amount = document.getElementById('amount');

    }



  //Representa en cada elemento DOM el balance total, los gastos y los ingresos  
 displayBalance = ({ total, income, expense }) => {

    this.balance.innerText = `$${total}`;
    //Si el balance es negativo lo muestra en rojo
    this.balance.style.color = total >= 0 ?   '#333'  :  '#c0392b'; 

    this.money_plus.innerText = `$${income}`;
    this.money_minus.innerText = `$${expense}`;
}

 

//Muestra en la pantalla la lista de transacciones 
 displayTransactions = (transactions) =>{
    this.list.innerHTML = '';
    transactions.forEach((transaction) => this.addTransactionDOM(transaction));
} 

//Crea en el DOM una fila nueva con cada transaccion
 addTransactionDOM = (transaction) => {
     //Evalua si la cantidad es positiva o negativa
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

  //Dependiendo de esto, al elemento 'li' le añada una clase u otra para anteponerle el signo
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.id = `${transaction.id}`;
    item.innerHTML = `
      ${transaction.text} <span>${sign}${Math.abs(
      transaction.amount
    )}</span> <button class="delete-btn">x</button>`;


    //añade un nuevo hijo al elemento 'ul
    list.appendChild(item); 
}


 clearForm = () =>{
    this.text.value = '';
    this.amount.value = '';
} 


//Devuelve un objeto con el valor del texto y la cantidad de la operación
//eliminando posibles espacios en blanco de cada cadena
 getFormData = () => {
    return {
        text: this.text.value.trim(),
        amount: this.amount.value.trim()
    };
}




//evento que sucede al pulsar el boton de añadir una nueva transacción
 bindAddTransaction = (handler) => {
    this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        //recibe como argumento una función que será enlazada en el controlador
        handler(this.getFormData());
      });
}


//evento que sucede al borrar una transacción
 bindDeleteTransaction = (handler) => {
    this.list.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
          const id = e.target.closest('li'); //extrae el 'id' del elemento sobre el que se ha pulsado
          //recibe como argumento una función que será enlazada en el controlador
          handler(id.id);
        }
      });
}


}

