function sum(array) {
  return array.reduce((acc,current) => acc + current )
}

function productAll(array) {
 return array
  .reduce((acc,current) => acc.concat(current,[]))
  .reduce((acc,current) => acc * current )

}

function objectify(array) {
 return array.reduce((acc, [key, value]) => {
    acc[key] = value; // Asignar el valor a la clave en el objeto acumulador
    return acc;       // Devolver el acumulador para la siguiente iteración
}, {});
}

function luckyNumbers(array) {
  return array
    .reduce((acc, current,index,arr) => { 
      if(index !== arr.length -1 ){
        return acc + current + ', '
      }else{
        return acc + 'and ' + current
      }

    },'Your lucky numbers are: ');
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
