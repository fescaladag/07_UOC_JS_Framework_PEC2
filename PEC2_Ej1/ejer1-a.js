//**************************************** */
//EJercicio 1 - a
//
//Codigo original con comentarios
//************************************** */

//Función que recibe un array de objetos, un objeto con las propieddades 'key' y 'value' y dos funciones callback dependiendo si la función findOne se resuelve con éxito o no 
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  //La función ejecuta las instrucciones de forma asincrona con un retardo de 2 seg.
  setTimeout(() => {
    //Busca si existe el par propiedad-valor del objeto pasado como parametro
    const element = list.find(element => element[key] === value);

    //si existe ejecutamos la función onSuccess y si no la función OnError
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

//Al ejecutarse devuelve el nombre de usuario pasado como parametro
const onSuccess = ({ name }) => console.log(`user: ${name}`);
//Al ejecutarse devuelve un mensaje de error
const onError = ({ msg }) => console.log(msg);

//Array de objetos que se pasa como parametro a la función findOne
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];


//imprime el mensaje por pantalla, es una instrucción sincrona, por lo tanto es lo primero que se muestra 
console.log('findOne success');  
//Llamada a la función asíncrona que da como resultado el callback onSuccess ( se ejecuta después de los console.logs)                                                                      
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });                                 
//imprime el mensaje por pantalla, es una instrucción sincrona, por lo tanto es lo segundo que se muestra 
console.log('findOne error');
//Llamada a la función asíncrona que da como resultado el callback onError ( se ejecuta después de los console.logs)  
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
