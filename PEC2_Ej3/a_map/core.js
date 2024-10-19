function multiplyBy10(array) {
  return array.map((e) => 10*e);
}

function shiftRight(array) {
  return array.map((e,i,a) => {
    
    //Aplicando esa formula desplazmos los elementos del array
    //El segundo return es necesario ya que sino devuelve undefined
      return a[(i - 1 + a.length) % a.length];

  });

}

function onlyVowels(array) {
 //en metodo match sobre esa explresion regular crea un array de caracteres vocales ej: ['a','e','a','e']
 //hacemos una segunda iteración para unirlos en un string ['aeae]
 return array.map((e)=> e.match(/[aeiou]/gi)).map((e)=>e.join(''));

}

function doubleMatrix(array) {
  //la primera iteración de map es un array numerico ej: [1,2,3]
  //sobre este array iteramos otra vez para multiplicar doblar cada elemento
  return array.map((e)=>e.map((e)=> 2*e));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
