//************************************************************************ */
//EJercicio 1 - d
//
//Sustitucíon ejecución paralela
//************************************************************************ */



//dentro de esta función ejecutamos las promesas en paralelo
const Parallel = async () => {

const prom1 = findOne(users, { key: 'name', value: 'Carlos' });
const prom2 = findOne(users, { key: 'name', value: 'Fermin' });


//el metodo 'Promise.allSettled' devuelve el estado de las dos promesas 
//independientemente de si ha sido resuelta o rechazada
const elements = await Promise.allSettled ([prom1,prom2]);

// iteramos sobre ambos resultados para comprobar su estado y obtener su valor
elements.forEach((element) => {
  element.status === 'fulfilled' ? console.log(`user: ${element.value.name}`) : console.log(element.reason.message)
})
}


//Función que recibe un array de objetos y un objeto con las propiedades 'key' y 'value'
//Se han eliminado los callback del ejercicio anterior ya que no son necesarias
const findOne = (list, { key, value }) => {
    //realiza lo mismo que en el ejercicio anterior pero es este caso no devuelve un callback sino una promesa
    return new Promise((resolve, reject) => {
    //La función ejecuta las instrucciones de forma asincrona con un retardo de 2 seg.
        setTimeout(() =>{
        const element = list.find(element => element[key] === value);
        //si el elemento existe (es decir la promesa se resuelve con éxito) nos devuelve el valor solicitado mediente el parametro resolve 
        //si por el contrario no existen los valores (promesa rechazada) se devuelve un mensaje de error 
        element ? resolve(element) : reject(new Error ("ERROR: Element Not Found"))
    },2000)
 })

}

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

//imprime el mensaje por pantalla, es una instrucción sincrona, por lo tanto es lo segundo que se muestra 
console.log('findOne error!!!');

//llamada a la función de ejecución paralela
Parallel();


/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
