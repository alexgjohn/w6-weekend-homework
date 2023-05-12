const PangramFinder = function (phrase) {
  this.phrase = phrase
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const phraseAsArray = this.phrase.split('')
  const phraseWithoutSpaces = phraseAsArray.filter((character) => {
    return character !== ' '
  })
  const pangram = phraseWithoutSpaces.every((letter) => {
    return this.alphabet.includes(letter)
  })
  return pangram
}

// Cinema.prototype.areAllFilmsOfMinLength = function (length) {
//   return this.films.every((film) => {
//     return film.length >= length;
//   });
// };

module.exports = PangramFinder;

// const pangramFinder = new PangramFinder('the quick brown fox jumps over the lazy dog')

