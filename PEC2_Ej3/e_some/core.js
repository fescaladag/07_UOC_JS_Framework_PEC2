// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some((e) => e > 10 );
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some((e) => e.length > 10 );
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some((e) => e.some((e) => e ) );
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.some((e) => e.includes('Lost'))
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
