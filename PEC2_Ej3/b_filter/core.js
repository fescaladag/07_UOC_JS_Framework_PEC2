function onlyEven(array) {
return array.filter((e)=>e % 2 == 0);
  
}

function onlyOneWord(array) {
  return array.filter((e)=> !e.includes(' '));
}

function positiveRowsOnly(array) {
  return array.filter((e)=>e.every((e)=> e > 0 ));
}

function allSameVowels(array) {

  return array.filter((e) =>{
    // Primaro Obtenemos todas las vocales en el string con match
    // y despues verificamos si todas las vocales son iguales con every
    return e.match(/[aeiou]/gi).every(((e,i,a) => e === a[0]))
  });



}




module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
