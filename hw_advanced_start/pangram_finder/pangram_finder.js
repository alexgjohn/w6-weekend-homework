const PangramFinder = function (phrase) {
  this.phrase = phrase
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {

  const phraseAsArray = this.phrase.split('')
  const phraseWithoutSpaces = phraseAsArray.filter((character) => {
    return character !== ' '
  })
  const phraseInLower = phraseWithoutSpaces.map((letter) => {
    return letter.toLowerCase()
  })
  const pangram = this.alphabet.every((letter) => {
    return phraseInLower.includes(letter)
  })
  // const pangram = phraseWithoutSpaces.every((letter) => {
  //   return this.alphabet.includes(letter)
  // })
  return pangram
}

// Cinema.prototype.areAllFilmsOfMinLength = function (length) {
//   return this.films.every((film) => {
//     return film.length >= length;
//   });
// };

module.exports = PangramFinder;

// const pangramFinder = new PangramFinder('the quick brown fox jumps over the lazy dog')

// const pangramFinder = new PangramFinder('this is not a pangram so the result should be false')

//console.log(pangramFinder.isPangram())