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

  return pangram
}



module.exports = PangramFinder;

