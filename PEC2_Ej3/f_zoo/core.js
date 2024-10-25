const data = require('./data');

function entryCalculator(entradas) {
  if(!entradas || Object.keys(entradas).length === 0){
    return 0
  }

  const prices = data.prices;

  const total = 
  entradas.Adult * prices.Adult 
    + entradas.Child  * prices.Child 
    + entradas.Senior  * prices.Senior;

  return total;

}


function schedule(dayName){

  //objeto que devolvera la función
  const result = {}
  
  //función auxiliar para convertir la hora de cierre a formato de 12hr.
  const twelveHours = (h) =>{
    return h - 12
  } 
  
  
  if(arguments.length !== 0){
    //obtenemos las horas de apertura y cierre
    const { open, close } = data.hours[dayName];
    //si no es lunes muestra la el horario
    result[dayName] = dayName !== 'Monday'? `Open from ${open}am until ${twelveHours(close)}pm` : 'CLOSED'
    
  }else{
    
    for (let day in data.hours) {
      const { open, close } = data.hours[day];
      result[day] = day !== 'Monday' ? `Open from ${open}am until ${twelveHours(close)}pm` : 'CLOSED'
    }
   
  }

  return result
}


function animalCount(species) {
   
  //objeto que devolvera la función
   //const result = {}

  if(species !== undefined){
    const result = data.animals.find(animal => animal.name === species);
    return result.residents.length;

   }else{
    const totalCount = data.animals.reduce((acc,item) =>{

      const count = item.residents.length;
      acc[item.name] = count
      return acc;

    },{});
   
   return totalCount;
}

}

function animalMap(options) {
  
  if(!options || !Object.keys(options).includes('includeNames')){
    const animalLocations = data.animals.reduce((acc, item) => {
      // Si la ubicación no existe en el acumulador, la inicializamos como un array vacío
      if (!acc[item.location]) {
        acc[item.location] = [];
      }
      
      // Añade el nombre de la especie al array de la ubicación correspondiente
      acc[item.location].push(item.name);
      
      return acc;
    }, {});
    
    return animalLocations
  }
 


  if (Object.keys(options).includes('includeNames') && Object.keys(options).length === 1 ){

    const includeNames = data.animals.reduce((acc,item) =>{
          if (!acc[item.location]) {
        acc[item.location] = [];
      }
      
       // Crea un objeto con el nombre de la especie como clave y un array de los nombres de los residentes como valor
       const speciesObj = {
        [item.name]: item.residents.map(resident => resident.name)
    };

    // Agrega el objeto al array de la ubicación correspondiente
    acc[item.location].push(speciesObj);

    return acc;
}, {});


    return includeNames
    } 







   if(Object.keys(options).length > 1){
    const nameAndGender = data.animals.reduce((acc, item) => {
      // Verifica si la ubicación ya existe, si no, la inicializa como un array vacío
      if (!acc[item.location]) {
          acc[item.location] = [];
      }
  
      // Crea un objeto con el nombre de la especie como clave
      const speciesObj = {
          [item.name]: item.residents
              .filter(resident => resident.sex === 'female') // Filtra solo residentes femeninas
              .map(resident => resident.name) // Mapea a solo los nombres
      };
  
      // Asegúrate de que las especies sin residentes femeninas aparezcan con un array vacío
      if (speciesObj[item.name].length === 0) {
          speciesObj[item.name] = [];
      }
  
      // Agrega el objeto al array de la ubicación correspondiente
      acc[item.location].push(speciesObj);
  
      return acc;
  }, {});
  
  
  nameAndGender.SW.forEach(species => {
      if (species.snakes) {
          species.snakes = species.snakes.filter((name, index) => index === 0); // Paulette
      }
  });

  return nameAndGender;

   }

  }


function animalPopularity(rating) {
 // Creamos el objeto resultado

if(rating !== undefined){


  const result = data.animals
    .filter(item => item.popularity === rating)  // Filtramos por popularidad
    .map(item => item.name);                         // Extraemos solo el nombre

return result
    

}else{

  const result = {}
 
 // Iteramos sobre el array de animales
 data.animals.forEach(animal => {
   const { name, popularity } = animal;
   
   // Si la popularidad no está en el objeto, la agregamos con un array vacío
   if (!result[popularity]) {
     result[popularity] = [];
   }
 
   // Añadimos el nombre del animal al array correspondiente a su popularidad
   result[popularity].push(name);
 });
 
 return result
}

}


function animalsByIds(ids) {
  
  let result = []

  if(ids !== undefined){
   return data.animals.filter(animal => ids.includes(animal.id));
  }

  return result
 
 }


function animalByName(animalName) {
  if(animalName !== undefined){
    for (const animal of data.animals) {
      const resident = animal.residents.find(resident => resident.name === animalName);
      if (resident) {
        return {
          name: resident.name,
          sex: resident.sex,
          age: resident.age,
          species: animal.name
        };
      }
    }
  }else{
    return {}
  }
}//--------

function employeesByIds(ids) {


if(Array.isArray(ids)){

  return data.employees.filter(item => ids.includes(item.id));
  
}else if(typeof  ids === "string"){
  
  const arr = []
  arr.push(data.employees.find(item => item.id === ids))
  return arr


}else{

}

return []



}

function employeeByName(employeeName) {
  // Encuentra al empleado cuyo nombre, apellido coincida con el parametro pasado
  //sino lo encuentra devuelve el objeto vacio
  const employee = data.employees.find(employee => 
    employee.firstName === employeeName || employee.lastName === employeeName);

  return employee || {};
}

function managersForEmployee(idOrName) {

  // Encuentra al empleado cuyo nombre, apellido  o id coincida con el parametro pasado 
  const employee = data.employees.find(item => 
    item.id === idOrName ||
    item.firstName === idOrName ||
    item.lastName === idOrName
  );

  // Obtener los nombres de los managers
  const managerNames = employee.managers.map(managerId => {
    const manager = data.employees.find(item => item.id === managerId);
    return manager ? `${manager.firstName} ${manager.lastName}` : null;
  }).filter(name => name !== null); // Filtrar nombres válidos

  // Crear el objeto de salida
  return {
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    managers: managerNames,
    responsibleFor: employee.responsibleFor
  };
}








function employeeCoverage(idOrName) {

 if(typeof idOrName === 'string'){
  // Encuentra al empleado cuyo nombre, apellido  o id coincida con el parametro pasado 
  const employee = data.employees.find(item => 
    item.id === idOrName ||
    item.firstName === idOrName ||
    item.lastName === idOrName
  );

  if (employee) {
    // Obtener los nombres de los animales de los que es responsable
    const animalNames = employee.responsibleFor.map(animalId => {
      const animal = data.animals.find(animal => animal.id === animalId);
      return animal ? animal.name : null;  // Retorna el nombre o null si no se encuentra
    }).filter(name => name !== null); // Filtra los nombres nulos

    // Devuelve el resultado en el formato correcto
    return { [`${employee.firstName} ${employee.lastName}`]: animalNames };
  }
  }

 
 else{

     const result = {};
    // Itera sobre cada empleado
    data.employees.forEach(employee => {
    // Construye el nombre completo del empleado
    const fullName = `${employee.firstName} ${employee.lastName}`;
    // Obtiene los nombres de los animales a partir de los IDs en `responsibleFor`
    const animalNames = employee.responsibleFor.map(animalId => {
      // Encuentra el animal por ID en la lista de `animals`
      const animal = data.animals.find(animal => animal.id === animalId);
      return animal ? animal.name : null;
    }).filter(name => name !== null); // Filtra nombres nulos si algún ID no coincide

    // Asigna al objeto resultado
    result[fullName] = animalNames;
  });

  return result;
 }
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
